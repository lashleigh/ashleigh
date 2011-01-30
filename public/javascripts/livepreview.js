//<![CDATA[
<!--

/*
 * This is the orginial function from Stuart Langridge at http://www.kryogenix.org/
 */
 
/*
* This is the update function from Jeff Minard - http://www.jrm.cc/
*/
// The above links are half dead. I'm going to clean this up and then put it on 
// github as a just and maybe paste the whole damn thing into SO.
  
    var myString = "p(my-class) Now a paragraph";
    //var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
    var myRegexp = /^p\((.+?)\)/g;
    var match = myRegexp.exec(myString);
    console.log(match[1]);

function superTextile(s) {
  var r = s;
  // quick tags first
  qtags = [['\\*', 'strong'],
           ['\\?\\?', 'cite'],
           ['\\+', 'ins'],  //fixed
           ['~', 'sub'],   
           ['\\^', 'sup'], // me
           ['@', 'code']];
  for (var i=0; i< qtags.length; i++) {
    ttag = qtags[i][0]; htag = qtags[i][1];
    re = new RegExp(ttag+'\\b(.+?)\\b'+ttag,'g');
    r = r.replace(re,'<'+htag+'>'+'$1'+'</'+htag+'>');
  }

  // underscores count as part of a word, so do them separately
  re = new RegExp('\\b_(.+?)_\\b','g');
  r = r.replace(re,'<em>$1</em>');
  
  // dashes
  re = new RegExp('[\s\n]-(.+?)-[\s\n]','g');
  r = r.replace(re,'<del>$1</del>');

  // links
  re = new RegExp('"\\b(.+?)\\(\\b(.+?)\\b\\)":([^\\s]+)','g');
  r = r.replace(re,'<a href="$3" title="$2">$1</a>');
  re = new RegExp('"\\b(.+?)\\b":([^\\s]+)','g');
  r = r.replace(re,'<a href="$2">$1</a>');

  // images
  re = new RegExp('!\\b(.+?)\\(\\b(.+?)\\b\\)!','g');
  r = r.replace(re,'<img src="$1" alt="$2">');
  re = new RegExp('!\\b(.+?)\\b!','g');
  r = r.replace(re,'<img src="$1">');
  
  // block level formatting
  
  // Jeff's hack to show single line breaks as they should.
  // insert breaks - but you get some....stupid ones
  re = new RegExp('(.*)\n([^#\*\n].*)','g');
  r = r.replace(re,'$1<br />$2');
  // remove the stupid breaks.
  re = new RegExp('\n<br />','g');
  r = r.replace(re,'\n');
  
  // Now we go through line by line
  lines = r.split('\n');
  nr = '';
  for (var i = 0; i<lines.length; i++) {
    line = lines[i].replace(/\s*$/,'');
    changed = 0;

    // Match bq. to create a block quote.
    if (line.search(/^\s*bq\.\s+/) != -1) { 
      line = line.replace(/^\s*bq\.\s+/,'\t<blockquote>')+'</blockquote>'; 
      changed = 1; 
    }

    // Match bc. to create a block of code.
    if (line.search(/^\s*bc\.\s+/) != -1) { 
      line = line.replace(/^\s*bc\.\s+/,'\t<pre><code>')+'</code></pre>'; 
      changed = 1; 
    }

    // Match headers with classes h1(my-class). Some header => <h1 class="my-class> Some header </h1>
    if (line.search(/^\s*h[1-6]\(.+?\)\.\s+/) != -1) { 
      re = new RegExp('h([1-6])\\(\(.+?\)\\)\.(.+)','g');
      line = line.replace(re,'<h$1 class="$2">$3</h$1>');
      changed = 1; 
    } 
    // Match headers. There was no need for alternations here, [1|2|3|4|5|6].
    if (line.search(/^\s*h[1-6]\.\s+/) != -1) { 
      re = new RegExp('h([1-6])\.(.+)','g');
      line = line.replace(re,'<h$1>$2</h$1>');
      changed = 1; 
    } 

    // Match paragraph classes
    if (line.search(/^p\((.+?)\)\.(.+)/) != -1) { 
      re = new RegExp('^p\\(\(.+?\)\\)\.(.+)','g');
      line = line.replace(re,'<p class="$1">$2</p>');
      changed = 1; 
    }
  
    // * for bullet list; make up an liu tag to be fixed later
    if (line.search(/^\s*\*\s+/) != -1) { 
      line = line.replace(/^\s*\*\s+/,'\t<liu>') + '</liu>'; 
      changed = 1; 
    } 
    // # for numeric list; make up an lio tag to be fixed later
    if (line.search(/^\s*#\s+/) != -1) { 
      line = line.replace(/^\s*#\s+/,'\t<lio>') + '</lio>'; 
      changed = 1; 
    } 

    if (!changed && (line.replace(/\s/g,'').length > 0)) line = '<p>'+line+'</p>';
    lines[i] = line + '\n';
  }
  
  // Second pass to do lists
  inlist = 0; 
  listtype = '';
  for (var i=0; i<lines.length; i++) {
    line = lines[i];
    if (inlist && listtype == 'ul' && !line.match(/^\t<liu/)) { line = '</ul>\n' + line; inlist = 0; }
    if (inlist && listtype == 'ol' && !line.match(/^\t<lio/)) { line = '</ol>\n' + line; inlist = 0; }
    if (!inlist && line.match(/^\t<liu/)) { line = '<ul>' + line; inlist = 1; listtype = 'ul'; }
    if (!inlist && line.match(/^\t<lio/)) { line = '<ol>' + line; inlist = 1; listtype = 'ol'; }
    lines[i] = line;
  }

  r = lines.join('\n');
  //jeff added : will correctly replace <li(o|u)> AND </li(o|u)>
  r = r.replace(/li[o|u]>/g,'li>');

  return r;
}

//-->
//]]>
