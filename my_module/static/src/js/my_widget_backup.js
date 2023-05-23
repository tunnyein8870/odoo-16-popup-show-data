/** @odoo-module **/

import { registry } from '@web/core/registry';
import { BinaryField } from '@web/views/fields/binary/binary_field';
var Dialog = require('web.Dialog');
var view_dialogs = require('web.view_dialogs');

export class MyWidget extends BinaryField {
    async _onClick() {
        Dialog.alert(
            this,
            "Dialog Alert",
            {
                onForceClose: function () {
                    console.log("Click Close");
                },
                confirm_callback: function () {
                    console.log("Click Ok");
                }
            }
        );
    }

}

MyWidget.template = 'my_module.my_widget_template';

registry.category('fields').add('my_widget', MyWidget);