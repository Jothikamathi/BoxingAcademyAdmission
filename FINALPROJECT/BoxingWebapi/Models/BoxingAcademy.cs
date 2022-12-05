using System;
using System.Collections.Generic;

namespace BoxingWebapi.Models;

public partial class BoxingAcademy
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Address { get; set; }

    public string? FathersName { get; set; }

    public string? Mobile { get; set; }

    public string? EmailId { get; set; }

    public string? Password { get; set; }

    public int? Age { get; set; }

    public string? DateofBirth { get; set; }

    public string? Weight { get; set; }

    public string? Height { get; set; }
}
