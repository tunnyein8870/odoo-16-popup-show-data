from odoo import models, fields, api


class Student(models.Model):
    _name = 'my_module.student'
    _description = 'my_module.student'

    name = fields.Char(string="Name")
    nrc = fields.Char(string='NRC')
    dob = fields.Date(string="Date of Birth")
    phone = fields.Char(string="Phone")
    contact = fields.Text(string="Contact")
    gender = fields.Selection([
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ], string="Gender", default='male')
    nationality = fields.Selection([
        ('kachin', 'Kachin'),
        ('kayar', 'Kayar'),
        ('kayin', 'Kayin'),
        ('chin', 'Chin'),
        ('burma', 'Burma'),
        ('mon', 'Mon'),
        ('rakhine', 'Rakhine'),
        ('shan', 'Shan'),
    ], string="Nationality", default="burma")