using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace mvc5.Models
{
    public class InputForm
    {
        [Required(ErrorMessage = "*Заполните заголовок формы")]
        public string FormName { get; set; }

        public string FormDescription { get; set; }

        [Required(ErrorMessage = "*Заполните заголовок поля")]
        public string FieldName { get; set; }

        [Required(ErrorMessage = "*Заполните тип поля")]
        public string FieldType { get; set; }

        public string FieldDescription { get; set; }

        public bool IsChecked { get; set; }
    }
}