class HomeController < ApplicationController
  def index
    @title = "p(#block). It doesn't really have a name or _(special-purpose)purpose_ yet, just a bit of fun. I'm hoping to pull in *MathJax* and some textile via *RedCloth*. There is already this nice live preview."
    @content = 'h1. Give RedCloth a try!

h2. sub heading

p(my-class). A *simple* paragraph with
a line break, some _emphasis_ and a "link":http://redcloth.org

* an item
* and another

# one
# two

bc. class Voila {
public:
  // Voila
  static const string VOILA = "Voila";
  // will not interfere with embedded tags.
}

bc. cross (a1,a2) (b1,b2) (c1,c2)
    | thing == 0 = Straight
    | thing  > 0 = LeftTurn
    | thing  < 0 = RightTurn
    where thing = (c2-a2)*(b1-a1) - (c1-a1)*(b2-a2)

bc. directionList [] = []
directionList (_:[]) = []
directionList (_:_:[]) = []
directionList (a:b:c:xs) = cross a b c : directionList (b:c:xs)

bq. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras auctor nibh eu sem bibendum ut tincidunt ante ornare. Proin lobortis porttitor leo, ut porta dolor malesuada sed. Duis dapibus euismod ultricies. Proin ornare tincidunt mauris, vel bibendum lectus mattis nec. Donec dui nulla, dapibus congue aliquam sit amet, vehicula eu odio. Etiam volutpat congue dictum. Integer volutpat quam ultrices libero tristique vestibulum. Duis nec eros nisl, sed aliquam neque. '
  end

end
