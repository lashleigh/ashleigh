module NotesHelper
  def resizable_style(n)
    "width:#{n.width}px;"+"height:#{n.height}px;"
  end

  def draggable_style(n)
    "top:#{n.top}px;"+"left:#{n.left}px;"
  end
end
