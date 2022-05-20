using System;
using System.Collections.Generic;

namespace SqlDatabaseFirst.Models
{
    public partial class View2
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = null!;
        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = null!;
    }
}
