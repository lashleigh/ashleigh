class HomeController < ApplicationController
  def index
    @title = "p(#block). It doesn't really have a name or _(special-purpose)purpose_ yet, just a bit of fun. I'm hoping to pull in *MathJax* and some textile via *RedCloth*. There is already this nice live preview."
    @content = 'h1. Basic header

h2(pink). sub header with its own class

p(my-class). A *simple* paragraph with
a line break, some _emphasis_ and a "link":http://redcloth.org

* an item
* and another

# one
# two

Now two blocks of code made using the "bc." but what I really want is "bc.."

bc. cross (a1,a2) (b1,b2) (c1,c2)
    | thing == 0 = Straight
    | thing  > 0 = LeftTurn
    | thing  < 0 = RightTurn
    where thing = (c2-a2)*(b1-a1) - (c1-a1)*(b2-a2)

bc. directionList [] = []
directionList (_:[]) = []
directionList (_:_:[]) = []
directionList (a:b:c:xs) = cross a b c : directionList (b:c:xs)'
  end

end
