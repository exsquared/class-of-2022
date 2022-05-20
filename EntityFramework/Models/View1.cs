using System;
using System.Collections.Generic;

namespace SqlDatabaseFirst.Models
{
    public partial class View1
    {
        public int StaffId { get; set; }
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public int StoreId { get; set; }
        public string StoreName { get; set; } = null!;
    }
}
