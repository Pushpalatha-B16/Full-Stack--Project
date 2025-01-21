from django.shortcuts import render,HttpResponse
from googletrans import Translator
# Create your views here.
def home(request):
    if request.method=='POST':
        text=request.POST['info']
        language=request.POST['lang']
        translator=Translator()
        tr=translator.translate(text,dest=language)
        return HttpResponse(tr.text)
    return render(request,'apptemp/index.html')
