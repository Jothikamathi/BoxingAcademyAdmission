﻿using System;
using System.Collections.Generic;

namespace BoxingWebapi.Models;

public partial class UserDetail
{
    public int UserId { get; set; }

    public string? FirstName { get; set; }

    public string? LastName { get; set; }

    public string? EmailId { get; set; }

    public string? MobileNo { get; set; }

    public string? Address { get; set; }

    public string? PinCode { get; set; }
}
