var date = new Date().toLocaleString("ru", { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', timezone: 'UTC' }),
  editComment = true;
  
var ansver = {
var ansver = {
  'КП MIN' :  date + ' Выслал тест Базис (MIN) 1год 1УЗ-29000/2УЗ-40600+3 мес.,2года- 1УЗ-40600/2УЗ-52200 руб. Уточнить получение',
  'КП MAX' :  date + ' Выслал тест Базис (MAX) 1год- 40600+1УЗ,2года-52200+1УЗ, Уточнить получение',
  'О' :  date +  ' Орлов:  ',
  'Н/О' :  date + ' Нет ответа',
  'дата' :  date ,
  'А' :  date +  ' Орлов: актулизировать ЛИД',
  'О' :  date + ' Отказ',
};



$(document).on('DOMSubtreeModified', '.crm-lead-header-lhe-wrapper', function(){
  
  if ( $('.crm-lead-header-lhe-edit-wrapper').is(':visible') && editComment === true){
    
    editComment = false;

    $.each(ansver, function( key, value ) {
      $('.lhe-stat-toolbar-cont').append('<div class="lhe-button-cont myText" attr="'+ value +'">'+ key +'</div>');
    });
    
    $('.myText').on('click', function(){
      let $iframeBody = $('.lhe-stat-toolbar-cont').closest('tbody').find('iframe').contents().find('body'),
        text = $(this).attr('attr');
      
      $iframeBody.append("<br>" + text).scrollTop($iframeBody.height());
    
    });
  }
  
});

<style>

.lhe-button-cont.myText,
.lhe-button-cont.myInvoice{
  width: auto;
  padding: 4px 3px 0 3px;
    margin: 0 3px;
    cursor: pointer;
}

.lhe-button-cont.myText:hover,
.lhe-button-cont.myInvoice:hover{
  background: #d9d9d9;
}

</style>

