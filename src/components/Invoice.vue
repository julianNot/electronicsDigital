import invoce from '@/components/Invoice.vue';
import invoice from '@/components/Invoice.vue';
<template>
  <div class="container-fluid">
        <div class="row" >
            <div class="col-xs-10 ">
                <h1>Factura</h1>
            </div>
            <div class="col-xs-2 row">
                <img class="img img-responsive col-1" src="https://cdn-icons-png.flaticon.com/512/4213/4213636.png" alt="Logotipo" width="150">
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-10">
                <h1 class="h6">{{invoice + index}}</h1>
            </div>
            <div class="col-xs-2 text-center">
                <strong>Fecha</strong>
                <br>
                2021-05-03 <br>
                <strong>Factura No.</strong>
                <br>
                1
            </div>
        </div>
        <hr>
        <div class="row text-center" style="margin-bottom: 2rem;">
            <div class="col-xs-6">
                <h1 class="h2">Cliente</h1>
                <strong>Luis Cabrera Benito</strong>
            </div>
            <div class="col-xs-6">
                <h1 class="h2">Remitente</h1>
                <strong>Luis Cabrera Benito</strong>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <table class="table table-condensed table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Descripción</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {{tablaProductos}}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" class="text-right">Subtotal</td>
                            <td>{{subtotal}}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-right">Descuento</td>
                            <td>{{descuento}}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-right">Subtotal con descuento</td>
                            <td>{{subtotalConDescuento}}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-right">Impuestos</td>
                            <td>{{impuestos}}</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="text-right">
                                <h4>Total</h4>
                            </td>
                            <td>
                                <h4>{{total}}</h4>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 text-center">
                <p class="h5">Gracias por su compra</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        listInvoices : [],
    }

}
</script>

<style>

</style>