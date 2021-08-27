/**
 * PagarmeCoreApiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const GetTransactionResponse = require('./GetTransactionResponse');

/**
 * Creates an instance of GetBoletoTransactionResponse
 */
class GetBoletoTransactionResponse extends GetTransactionResponse {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.url = this.constructor.getValue(obj.url);
        this.barcode = this.constructor.getValue(obj.barcode);
        this.nossoNumero = this.constructor.getValue(obj.nossoNumero || obj.nosso_numero);
        this.bank = this.constructor.getValue(obj.bank);
        this.documentNumber = this.constructor.getValue(obj.documentNumber || obj.document_number);
        this.instructions = this.constructor.getValue(obj.instructions);
        this.billingAddress = this.constructor.getValue(obj.billingAddress || obj.billing_address);
        this.dueAt = this.constructor.getValue(obj.dueAt || obj.due_at);
        this.qrCode = this.constructor.getValue(obj.qrCode || obj.qr_code);
        this.line = this.constructor.getValue(obj.line);
        this.pdfPassword = this.constructor.getValue(obj.pdfPassword || obj.pdf_password);
        this.pdf = this.constructor.getValue(obj.pdf);
        this.paidAt = this.constructor.getValue(obj.paidAt || obj.paid_at);
        this.paidAmount = this.constructor.getValue(obj.paidAmount || obj.paid_amount);
        this.type = this.constructor.getValue(obj.type);
        this.creditAt = this.constructor.getValue(obj.creditAt || obj.credit_at);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'url', realName: 'url' },
            { name: 'barcode', realName: 'barcode' },
            { name: 'nossoNumero', realName: 'nosso_numero' },
            { name: 'bank', realName: 'bank' },
            { name: 'documentNumber', realName: 'document_number' },
            { name: 'instructions', realName: 'instructions' },
            {
                name: 'billingAddress',
                realName: 'billing_address',
                type: 'GetBillingAddressResponse',
            },
            { name: 'dueAt', realName: 'due_at', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'qrCode', realName: 'qr_code' },
            { name: 'line', realName: 'line' },
            { name: 'pdfPassword', realName: 'pdf_password' },
            { name: 'pdf', realName: 'pdf' },
            { name: 'paidAt', realName: 'paid_at', isDateTime: true, dateTimeValue: 'rfc3339' },
            { name: 'paidAmount', realName: 'paid_amount' },
            { name: 'type', realName: 'type' },
            { name: 'creditAt', realName: 'credit_at', isDateTime: true, dateTimeValue: 'rfc3339' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {
            boleto: 'GetBoletoTransactionResponse',
        };
    }
}

module.exports = GetBoletoTransactionResponse;