class HomeController < ApplicationController
  def index
    @posts = Post.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @posts }
    end
  end

  def preview
    @title = "p(#block). It doesn't really have a name or _(special-purpose)purpose_ yet, just a bit of fun. I'm hoping to pull in *MathJax* and some textile via *RedCloth*. There is already this nice live preview."
    @content = 'h1. Basic header -- Ashleigh\'s

h2(pink). "sub header with its own class..."

* *an item*
* _and another_
* a plain one just for fun
* @some test code@

p=. Center a paragraph
!http://farm5.static.flickr.com/4084/5011689559_faaba31577.jpg!

The code shown here gets syntax highlighting from <a href="http://code.google.com/p/google-code-prettify/">prettify</a>.

bc. cross (a1,a2) (b1,b2) (c1,c2)
    | thing == 0 = Straight
    | thing  > 0 = LeftTurn
    | thing  < 0 = RightTurn
    where thing = (c2 - a2)(b1 - a1) - (c1 - a1)(b2 - a2)

bc. directionList [] = []
directionList (_:[]) = []
directionList (_:_:[]) = []
directionList (a:b:c:xs) = cross a b c : directionList (b:c:xs)'
  end

end
