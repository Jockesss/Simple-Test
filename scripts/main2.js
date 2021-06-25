var result
function check()

{

   var question = 1;
   var value1 = 0;
   var value2 = 0;
   
   result = "";

   var choice;
   
   for (question = 1; question <= 3; question++) {
   
      var q = document.forms['myForm'].elements['q'+question];

         for (var i = 0; i < q.length; i++) {
            if (q[i].checked) {
               choice = q[i].value;
            }
         }

         if (choice == "value1") {
            value1++;
         }

         if (choice == "value2") {
            value2++;
         }


      }
      if (value2 == 0) {

        // Нет правильных ответов
        result = "appraisal2";

     }

     else if (value2 == 1) {

        // Один правильный ответ
        result = "appraisal3";

     }

     else if (value2 == 2) {

        // Два правильных ответа
        result = "appraisal4";

     }

     else if (value2 == 3) {

        // Три правильных ответа
        result = "appraisal5";

     }


     else {
        result = "404";
     }

     window.location = result + '.html';

}
