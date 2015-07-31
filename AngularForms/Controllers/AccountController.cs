using AngularForms.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngularForms.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register(UserModel userModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // IdentityResult result = await _repo.RegisterUser(userModel);

            // IHttpActionResult errorResult = GetErrorResult(result);

            //if (errorResult != null)
            //{
            //    return errorResult;
            //}

            return Ok();
        }
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(Order.CreateOrders());
        }
        public class Order
        {
            public int OrderID { get; set; }
            public string CustomerName { get; set; }
            public string ShipperCity { get; set; }
            public Boolean IsShipped { get; set; }

            public static List<Order> CreateOrders()
            {
                List<Order> OrderList = new List<Order> 
            {
                new Order {OrderID = 10248, CustomerName = "Taiseer Joudeh", ShipperCity = "Amman", IsShipped = true },
                new Order {OrderID = 10249, CustomerName = "Ahmad Hasan", ShipperCity = "Dubai", IsShipped = false},
                new Order {OrderID = 10250,CustomerName = "Tamer Yaser", ShipperCity = "Jeddah", IsShipped = false },
                new Order {OrderID = 10251,CustomerName = "Lina Majed", ShipperCity = "Abu Dhabi", IsShipped = false},
                new Order {OrderID = 10252,CustomerName = "Yasmeen Rami", ShipperCity = "Kuwait", IsShipped = true}
            };

                return OrderList;
            }
        }
    }
}
