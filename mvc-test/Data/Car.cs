using System.ComponentModel.DataAnnotations;

namespace mvc_test.Data
{
    public class Car
    {
        [Key]
        public int Id { get; set; }
        public int Year { get; set; }
        [MaxLength(30)]
        [MinLength(3)]
        public string Make { get; set; } = string.Empty;
        [MaxLength(100)]
        [MinLength(3)]
        public string Model { get; set; } = string.Empty;
        public bool Active { get; set; }
        public string? Notes { get; set; }

    }
}
