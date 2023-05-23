from odoo import models, fields, api


class my_module(models.Model):
    _name = 'my_module.my_model'
    _description = 'my_module.my_model'

    name = fields.Char()
    value = fields.Integer()
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Char()
    confirm_btn = fields.Binary()
    student_id = fields.Many2one('my_module.student', string='Student')

    @api.depends('value')
    def _value_pc(self):
        for record in self:
            record.value2 = float(record.value) / 100


    def open_student_tree_view(self):
        return {
            'name': 'Students',
            'type': 'ir.actions.act_window',
            'res_model': 'my_module.student',
            'view_mode': 'tree,form',
            'target': 'new',
            'domain': [('id', '=', self.student_id.id)],
    }
