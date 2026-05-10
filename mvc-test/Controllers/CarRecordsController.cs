using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using mvc_test.Data;

namespace mvc_test.Controllers
{
    public class CarRecordsController : Controller
    {
        private readonly RecordContext _context;

        public CarRecordsController(RecordContext context)
        {
            _context = context;
        }

        // GET: CarRecords
        public async Task<IActionResult> Index()
        {
            return View(await _context.CarRecords.ToListAsync());
        }

        // GET: CarRecords/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var carRecord = await _context.CarRecords
                .FirstOrDefaultAsync(m => m.Id == id);
            if (carRecord == null)
            {
                return NotFound();
            }

            return View(carRecord);
        }

        // GET: CarRecords/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: CarRecords/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Title,RecordType,Repairer,Notes")] CarRecord carRecord)
        {
            if (ModelState.IsValid)
            {
                _context.Add(carRecord);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(carRecord);
        }

        // GET: CarRecords/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var carRecord = await _context.CarRecords.FindAsync(id);
            if (carRecord == null)
            {
                return NotFound();
            }
            return View(carRecord);
        }

        // POST: CarRecords/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Title,RecordType,Repairer,Notes")] CarRecord carRecord)
        {
            if (id != carRecord.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(carRecord);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CarRecordExists(carRecord.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(carRecord);
        }

        // GET: CarRecords/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var carRecord = await _context.CarRecords
                .FirstOrDefaultAsync(m => m.Id == id);
            if (carRecord == null)
            {
                return NotFound();
            }

            return View(carRecord);
        }

        // POST: CarRecords/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var carRecord = await _context.CarRecords.FindAsync(id);
            if (carRecord != null)
            {
                _context.CarRecords.Remove(carRecord);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool CarRecordExists(int id)
        {
            return _context.CarRecords.Any(e => e.Id == id);
        }
    }
}
