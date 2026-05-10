using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace mvc_test.Data
{
    public class CarRecord
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(50)]
        [MinLength(3)]
        public string Title { get; set; } = string.Empty;
        public RecordType RecordType { get; set; }
        [MaxLength(100)]
        [MinLength(3)]
        public string Repairer { get; set; } = string.Empty;
        public string? Notes { get; set; }

    }

    public enum RecordType
    {
        Maintenance = 0,
        Repair = 1,
        Inspection = 2,
        Other = 3
    }
}
