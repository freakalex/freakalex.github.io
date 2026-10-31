function initCollection() {
  const root = document.querySelector<HTMLElement>("[data-adventure-collection]");
  if (!root || root.dataset.ready) return;
  root.dataset.ready = "true";
  const slides = [...root.querySelectorAll<HTMLElement>("[data-slide]")];
  const quotes = [...root.querySelectorAll<HTMLElement>("[data-quote]")];
  const gallery = root.querySelector<HTMLElement>(".wallpaper-gallery")!;
  const imageCount = root.querySelector<HTMLElement>("[data-image-count]")!;
  const quoteCount = root.querySelector<HTMLElement>("[data-quote-count]")!;
  const status = root.querySelector<HTMLElement>("[data-copy-status]")!;
  let imageIndex = 0, quoteIndex = 0, copyRequest = 0;
  function showImage(next:number) {
    imageIndex = (next + slides.length) % slides.length;
    slides.forEach((slide,i) => { slide.hidden = i !== imageIndex; });
    imageCount.textContent = `${imageIndex+1} / ${slides.length}`;
  }
  function showQuote(next:number) {
    quoteIndex = (next + quotes.length) % quotes.length;
    quotes.forEach((quote,i) => {quote.hidden = i !== quoteIndex;});
    quoteCount.textContent = `${quoteIndex+1} / ${quotes.length}`;
    copyRequest++; status.textContent = "";
  }
  // Uniform choice among all other items; never repeat when multiple items exist.
  function different(current:number,length:number) { return length<2 ? 0 : (current+1+Math.floor(Math.random()*(length-1)))%length; }
  root.querySelector("[data-image-prev]")?.addEventListener("click",()=>showImage(imageIndex-1));
  root.querySelector("[data-image-next]")?.addEventListener("click",()=>showImage(imageIndex+1));
  root.querySelector("[data-random]")?.addEventListener("click",()=>{showImage(different(imageIndex,slides.length));showQuote(different(quoteIndex,quotes.length));});
  root.querySelector("[data-quote-next]")?.addEventListener("click",()=>showQuote(quoteIndex+1));
  gallery.addEventListener("keydown",event=>{if(event.key==="ArrowLeft"||event.key==="ArrowRight"){event.preventDefault();showImage(imageIndex+(event.key==="ArrowLeft"?-1:1));}});
  let touchX:number|null=null, touchY=0;
  gallery.addEventListener("touchstart",event=>{if(event.touches.length===1){touchX=event.touches[0].clientX;touchY=event.touches[0].clientY;}else{touchX=null;}},{passive:true});
  gallery.addEventListener("touchend",event=>{if(touchX===null||!event.changedTouches.length)return;const dx=event.changedTouches[0].clientX-touchX,dy=event.changedTouches[0].clientY-touchY;touchX=null;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5)showImage(imageIndex+(dx<0?1:-1));},{passive:true});
  root.querySelector("[data-copy]")?.addEventListener("click",async()=>{
    const request=++copyRequest;
    const text=quotes[quoteIndex].querySelector("blockquote")!.textContent+"\n"+quotes[quoteIndex].querySelector("p")!.textContent;
    try {await navigator.clipboard.writeText(text);if(request===copyRequest)status.textContent="已复制";}
    catch {if(request===copyRequest)status.textContent="复制失败，请选中台词手动复制。";}
  });
}
document.addEventListener("astro:page-load",initCollection);
initCollection();
