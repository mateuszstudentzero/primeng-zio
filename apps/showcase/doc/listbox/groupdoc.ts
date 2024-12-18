import { Code } from '@/domain/code';
import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'group-doc',
    standalone: false,
    template: `
        <app-docsectiontext>
            <p>Options can be grouped when a nested data structures is provided.</p>
        </app-docsectiontext>
        <div class="card flex justify-center">
            <p-listbox [options]="groupedCities" [group]="true" [(ngModel)]="selectedCountry" class="w-full md:w-56">
                <ng-template let-group pTemplate="group">
                    <div class="flex items-center">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                        <span>{{ group.label }}</span>
                    </div>
                </ng-template>
            </p-listbox>
        </div>
        <app-code [code]="code" selector="listbox-group-demo"></app-code>
    `
})
export class GroupDoc {
    groupedCities!: SelectItemGroup[];

    selectedCountry!: Country;

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }

    code: Code = {
        basic: `<p-listbox
    [options]="groupedCities"
    [group]="true"
    [(ngModel)]="selectedCountry"
    class="w-full md:w-56">
        <ng-template let-group pTemplate="group">
            <div class="flex items-center">
                <img
                    src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                    [class]="'mr-2 flag flag-' + group.value"
                    style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
</p-listbox>`,

        html: `<div class="card flex justify-center">
    <p-listbox
        [options]="groupedCities"
        [group]="true"
        [(ngModel)]="selectedCountry"
        class="w-full md:w-56">
            <ng-template let-group pTemplate="group">
                <div class="flex items-center">
                    <img
                        src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png"
                        [class]="'mr-2 flag flag-' + group.value"
                        style="width: 20px" />
                    <span>{{ group.label }}</span>
                </div>
            </ng-template>
    </p-listbox>
</div>`,

        typescript: `import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';

interface Country {
    name: string,
    code: string
}

@Component({
    selector: 'listbox-group-demo',
    templateUrl: './listbox-group-demo.html',
    standalone: true,
    imports: [FormsModule, ListboxModule]
})
export class ListboxGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCountry!: Country;

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }
}`
    };
}
