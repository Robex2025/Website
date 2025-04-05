import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-formlayoutdemo',
    templateUrl: './formlayoutdemo.component.html',
    styleUrls: ['./formlayoutdemo.scss'],
})
export class FormLayoutDemoComponent implements OnInit {
    contact: FormGroup = <FormGroup>{};
    visible: boolean = false;

    formActionUrl: string = 'https://formsubmit.co/gestionrobexinc@gmail.com';

    constructor(private fb: FormBuilder) {}

    showDialog() {
        this.visible = true;
    }

    onSubmit() {
        if (this.contact.valid) {
            // You don't need to make an HTTP request yourself, FormSubmit handles it
            const form = document.querySelector('form') as HTMLFormElement;
            form.action = this.formActionUrl; // Set the action to FormSubmit.co
            form.submit(); // Trigger form submission to FormSubmit.co

            alert('Votre soumission a bien été envoyée. À bientôt !');
            this.contact.reset(); // Reset form after successful submission
        } else {
            alert('Veuillez remplir les champs obligatoires.');
        }
    }

    ngOnInit() {
        this.formInit();
    }

    formInit(): void {
        this.contact = this.fb.group({
            nom: ['', Validators.required],
            prenom: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            ville: ['', Validators.required],
            phone: ['', Validators.required],
            details: [''],
        });
    }
}
