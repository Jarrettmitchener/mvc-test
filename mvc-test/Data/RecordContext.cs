using Microsoft.EntityFrameworkCore;

namespace mvc_test.Data
{
    public class RecordContext : DbContext
    {
        public RecordContext(DbContextOptions<RecordContext> options)
            : base(options)
        {
        }
        public DbSet<CarRecord> CarRecords { get; set; }
        public DbSet<Car> Cars { get; set; }
    }
}
