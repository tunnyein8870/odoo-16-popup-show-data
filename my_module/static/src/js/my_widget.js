/** @odoo-module **/

import { registry } from '@web/core/registry';
import { BinaryField } from '@web/views/fields/binary/binary_field';
var Dialog = require('web.Dialog');

// web.view_dialogs does not support in odoo 16.
// var view_dialogs = require('web.view_dialogs');

export class MyWidget extends BinaryField {
    async _onClick() {
        const { id, name, value, value2, description } = this.props.record.data;
        // console.log(id, name, value, value2, description);
        console.log(this.props.record.data)

        const content = `
            <div>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Value:</strong> ${value}</p>
                <p><strong>Value2:</strong> ${value2}</p>
                <p><strong>Description:</strong> ${description}</p>
            </div>
        `;
        Dialog.confirm(
            this,
            "Confirm",
            {
                $content: content,
                onForceClose: function () {
                    console.log("Click Close");
                },
                confirm_callback: function () {
                    console.log("Click Confirm");
                },
                cancel_callback: function () {
                    console.log("Click Cancel");
                }
            }
        );
    }
}

MyWidget.template = 'my_module.my_widget_template';

registry.category('fields').add('my_widget', MyWidget);