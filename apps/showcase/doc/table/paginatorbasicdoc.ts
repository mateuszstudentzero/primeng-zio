import { Code } from '@/domain/code';
import { Customer } from '@/domain/customer';
import { CustomerService } from '@/service/customerservice';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
    selector: 'paginator-basic-doc',
    standalone: false,
    template: ` <app-docsectiontext>
            <p>Pagination is enabled by setting <i>paginator</i> property to <i>true</i> and defining a rows property to specify the number of rows per page.</p>
        </app-docsectiontext>
        <p-deferred-demo (load)="loadDemoData()">
            <div class="card">
                <p-table [value]="customers" [paginator]="true" [rows]="5" [tableStyle]="{ 'min-width': '50rem' }" [rowsPerPageOptions]="[5, 10, 20]">
                    <ng-template #header>
                        <tr>
                            <th style="width:25%">Name</th>
                            <th style="width:25%">Country</th>
                            <th style="width:25%">Company</th>
                            <th style="width:25%">Representative</th>
                        </tr>
                    </ng-template>
                    <ng-template #body let-customer>
                        <tr>
                            <td>{{ customer.name }}</td>
                            <td>{{ customer.country.name }}</td>
                            <td>{{ customer.company }}</td>
                            <td>{{ customer.representative.name }}</td>
                        </tr>
                    </ng-template>
                </p-table>
            </div>
        </p-deferred-demo>
        <app-code [code]="code" selector="table-paginator-basic-demo" [extFiles]="extFiles"></app-code>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorBasicDoc {
    customers!: Customer[];

    constructor(
        private customerService: CustomerService,
        private cd: ChangeDetectorRef
    ) {}

    loadDemoData() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.cd.markForCheck();
        });
    }

    code: Code = {
        basic: `<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [tableStyle]="{ 'min-width': '50rem' }"
    [rowsPerPageOptions]="[5, 10, 20]"
>
    <ng-template #header>
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template #body let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
</p-table>`,
        html: `<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [tableStyle]="{ 'min-width': '50rem' }"
        [rowsPerPageOptions]="[5, 10, 20]"
    >
        <ng-template #header>
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template #body let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,
        typescript: `import { Component } from '@angular/core';
import { Customer } from '@/domain/customer';
import { CustomerService } from '@/service/customerservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'table-paginator-basic-demo',
    templateUrl: 'table-paginator-basic-demo.html',
    standalone: true,
    imports: [TableModule, CommonModule],
    providers: [ProductService]
})
export class TablePaginatorBasicDemo {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}`,
        data: `{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,
        service: ['CustomerService']
    };

    extFiles = [
        {
            path: 'src/domain/customer.ts',
            content: `
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`
        }
    ];
}
