using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using mvc5.Models;

namespace mvc5.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet]
        public ActionResult Index()
        {
            var newForm = new InputForm();
            return View(newForm);
        }

        [HttpPost]
        public ActionResult Index(InputForm form)
        {
            if (ModelState.IsValid)
            {
                return RedirectToAction("End");
            }
            else
            {
                return View(form);
            }
        }

        public string End(InputForm form)
        {
            return "Success";
        }
    }
}