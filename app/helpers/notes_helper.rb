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

  def note_class(n)
    n_class = "note"
    if n.resizable
      n_class += " resizable"
    end
    if n.draggable
      n_class += " draggable"
    end
    return n_class
  end
end
