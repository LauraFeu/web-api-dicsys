using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPI.Models;
using System.Web.Http.Cors;

namespace WebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CredencialController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/Credencial
        public IQueryable<Credenciales> GetCredenciales()
        {
            return db.Credenciales;
        }

        // PUT: api/Credencial/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCredenciales(int id, Credenciales credenciales)
        {
            
            if (id != credenciales.IDEmpleado)
            {
                return BadRequest();
            }

            db.Entry(credenciales).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CredencialesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Credencial
        [ResponseType(typeof(Credenciales))]
        public IHttpActionResult PostCredenciales(Credenciales credenciales)
        {
            db.Credenciales.Add(credenciales);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CredencialesExists(credenciales.IDEmpleado))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = credenciales.IDEmpleado }, credenciales);
        }

        // DELETE: api/Credencial/5
        [ResponseType(typeof(Credenciales))]
        public IHttpActionResult DeleteCredenciales(int id)
        {
            Credenciales credenciales = db.Credenciales.Find(id);
            if (credenciales == null)
            {
                return NotFound();
            }

            db.Credenciales.Remove(credenciales);
            db.SaveChanges();

            return Ok(credenciales);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CredencialesExists(int id)
        {
            return db.Credenciales.Count(e => e.IDEmpleado == id) > 0;
        }
    }
}


