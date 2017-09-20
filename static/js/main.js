// class for the lethargy scroll in the home page
class ScrollingEvent
{
  constructor(divToScroll, nextStep)
  {
    this.mainScrollDiv = document.querySelector(divToScroll);
    this.nextStep = nextStep;
  }
  execute()
  {
      console.log('coucou')
  }
  goTo(check)
  {
    let that = this
    let checkScroll = true
    let lethargy = new Lethargy()
    var scroll = function scroll(e)
    {
      if (checkScroll === true)
      {
        checkScroll = false
        e.preventDefault();
        e.stopPropagation();
        if (lethargy.check(e) === check) that.execute()
      }
    }

    this.mainScrollDiv.addEventListener('mousewheel', scroll)
    this.mainScrollDiv.addEventListener('DOMMouseScroll', scroll)
    this.mainScrollDiv.addEventListener('wheel', scroll)
    this.mainScrollDiv.addEventListener('MozMousePixelScroll', scroll)
    }
  }

  const scrollChap = new ScrollingEvent('.chapter1-etape1', 'etape2')
  scrollChap.goTo(-1)
