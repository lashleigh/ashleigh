module NotesHelper
  def resizable_style(n)
    "width:#{n.width}px;"+"height:#{n.height}px;"
  end

  def content_style(n)
    "width:#{n.width-10}px;"+"height:#{n.height-10}px;"
  end

  def form_style(n)
    "display:none;"+"width:#{n.width-10}px;"+"height:#{n.height-10}px;"
  end

  def draggable_style(n)
    "top:#{n.top}px;"+"left:#{n.left}px;"
  end

  def style(n)
    "top:#{n.top}px;"+"left:#{n.left}px;"+"width:#{n.width}px;"+"height:#{n.height}px;"
  end
end
