using Microsoft.AspNetCore.Mvc;
using BoxingWebapi.Models;


namespace EmpWebApi.Controllers;

[ApiController]
[Route("api/BoxingAdmission")]
public class BoxingAdmissionController : ControllerBase
{
  //Entities object
  private readonly BoxingDbContext DB;
  public BoxingAdmissionController(BoxingDbContext db)
  {
    this.DB = db;
  }

   [HttpGet("GetUserDetailsById/{uid}")]
    public IActionResult GetByID(int uid)
    {
            var users =this.DB.BoxingAcademies.FirstOrDefault(o=>o.Id==uid);
            return Ok(users);
    }

     [HttpDelete("DeleteUserDetails/{uid}")]
    public IActionResult DeleteUser(int uid)
    {
        string message = "";
            var user = this.DB.BoxingAcademies.Find(uid);
            if (user == null)
            {
                return NotFound();
            }

            this.DB.BoxingAcademies.Remove(user);
            int result = this.DB.SaveChanges();
            if (result > 0)
            {
                message = "User has been sussfully deleted";
            }
            else
            {
                message = "failed";
            }

            return Ok(message);
        }

    

  //To add the registration details to the DB
  [HttpPost("InsertBoxers")]
  public object InsertBoxers(Register regObj)
  {
     string message = ""; 
    try{
        BoxingAcademy el = new BoxingAcademy();
        if(el.Id==0)
        {

            el.Id = regObj.RegId;
            el.Name = regObj.RegName;
            el.Address = regObj.RegAddress;
            el.FathersName = regObj.RegFathersName;
            el.Mobile = regObj.RegMobile;
            el.EmailId = regObj.RegEmailId;
            el.Password = regObj.RegPassword;
            el.Age = regObj.RegAge;
            el.DateofBirth = regObj.RegDateofBirth;
            el.Weight = regObj.RegWeight;
            el.Height = regObj.RegHeight;
            //Add
            DB.BoxingAcademies.Add(el);

              
                    int result = this.DB.SaveChanges();
                    if (result > 0)
                    {
                        message = "User has been sucessfully added";
                    }
                    else
                    {
                        message = "failed";
                    }

                     return Ok(message);
            //Add

            //save it in the database
            DB.SaveChanges();

            return new Response{Status="Success" , Message = "Employee Added!"};

        }
    }
    catch(System.Exception)
    {
throw;
    }

    return new Response{Status="Error" , Message="Invalid Information"};
  }

  //Display all employees from db

  [HttpGet("GetAllEmployees")]
  public IQueryable<BoxingAcademy> GetAllEmployees()
  {
    try
    {
        return DB.BoxingAcademies;
    }
    catch(System.Exception)
    {
        throw;
    }
  }


  [HttpPost("Login")]
  public IActionResult LoginCheck(Login logObj)
  {
    var logindetail = DB.BoxingAcademies.Where(x=>x.EmailId.Equals(logObj.Email)&& x.Password.Equals(logObj.Password)).FirstOrDefault();
    if(logindetail == null)
    {
        return Ok(new Response{Status="Not Valid" , Message = "Invalid Credentials!"});
    }
    else
    {
        return Ok(new Response{Status="Success" , Message="Welcome User!"});
    }
  }
}