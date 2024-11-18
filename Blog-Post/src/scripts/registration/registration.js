import createHeader from '../header/createHeader.js';
import { createFooter, updateFooter } from '../footer/createFooter.js';
import { toggleThem } from '../header/headerBtnHandlers.js';

function createRegistrationLayout() {
  const container = UI.createElement('div', { class: 'container-root' }, [
    createHeader([
      { name: 'Sign In', href: '../../index.html' },
      { name: 'Home', href: './home.html' },
    ]),

    UI.createElement('section', { class: 'registration-form' }, [
      UI.createElement('div', { class: 'container py-5 h-100' }, [
        UI.createElement(
          'div',
          { class: 'row justify-content-center align-items-center h-100' },
          [
            UI.createElement(
              'div',
              {
                class: 'col-12 col-lg-9 col-xl-7',
              },
              [
                UI.createElement(
                  'div',
                  {
                    class: 'card shadow-2-strong card-registration',
                  },
                  [
                    UI.createElement(
                      'div',
                      {
                        class: 'card-body p-4 p-md-5',
                      },
                      [
                        UI.createElement(
                          'div',
                          {
                            class: 'mb-4 pb-2 pb-md-0 mb-md-5 h3',
                          },
                          'Registration Form',
                        ),
                        UI.createElement('form', {}, [
                          UI.createElement('div', { class: 'row' }, [
                            UI.createElement(
                              'div',
                              { class: 'col-md-6 mb-4' },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    'data-mdb-input-init': '',
                                    class: 'form-outline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-control form-control-lg',
                                      type: 'text',
                                      id: 'firstName',
                                      required: true,
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-label',
                                        for: 'firstName',
                                      },
                                      'First Name',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            UI.createElement(
                              'div',
                              { class: 'col-md-6 mb-4' },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    'data-mdb-input-init': '',
                                    class: 'form-outline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-control form-control-lg',
                                      type: 'text',
                                      id: 'lastName',
                                      required: true,
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-label',
                                        for: 'lastName',
                                      },
                                      'Last Name',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ]),
                          UI.createElement('div', { class: 'row' }, [
                            UI.createElement(
                              'div',
                              {
                                class:
                                  'col-md-6 mb-4 d-flex align-items-center',
                              },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    'data-mdb-input-init': '',
                                    class: 'form-outline datepicker w-100',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-control form-control-lg',
                                      type: 'text',
                                      id: 'birthdayDate',
                                      required: true,
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-label',
                                        for: 'birthdayDate',
                                      },
                                      'Birthday',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            UI.createElement(
                              'div',
                              { class: 'col-md-6 mb-4' },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    class: 'mb-2 pb-1 h5',
                                  },
                                  'Gender:',
                                ),
                                UI.createElement(
                                  'div',
                                  {
                                    class: 'form-check form-check-inline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-check-input',
                                      type: 'radio',
                                      name: 'inlineRadioOptions',
                                      id: 'femaleGender',
                                      value: 'female',
                                      checked: '',
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-check-label',
                                        for: 'femaleGender',
                                      },
                                      'Female',
                                    ),
                                  ],
                                ),
                                UI.createElement(
                                  'div',
                                  {
                                    class: 'form-check form-check-inline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-check-input',
                                      type: 'radio',
                                      name: 'inlineRadioOptions',
                                      id: 'maleGender',
                                      value: 'male',
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-check-label',
                                        for: 'maleGender',
                                      },
                                      'Male',
                                    ),
                                  ],
                                ),
                                UI.createElement(
                                  'div',
                                  {
                                    class: 'form-check form-check-inline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-check-input',
                                      type: 'radio',
                                      name: 'inlineRadioOptions',
                                      id: 'otherGender',
                                      value: 'otherGender',
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-check-label',
                                        for: 'otherGender',
                                      },
                                      'Other',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ]),
                          UI.createElement('div', { class: 'row' }, [
                            UI.createElement(
                              'div',
                              {
                                class: 'col-md-6 mb-4 pb-2',
                              },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    'data-mdb-input-init': '',
                                    class: 'form-outline',
                                  },
                                  [
                                    UI.createElement('input', {
                                      class: 'form-control form-control-lg',
                                      type: 'email',
                                      id: 'emailAddress',
                                      required: true,
                                    }),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-label',
                                        for: 'emailAddress',
                                      },
                                      'Email',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                            UI.createElement(
                              'div',
                              {
                                class: 'col-md-6 mb-4 pb-2',
                              },
                              [
                                UI.createElement(
                                  'div',
                                  {
                                    'data-mdb-input-init': '',
                                    class: 'form-outline',
                                  },
                                  [
                                    UI.createElement(
                                      'select',
                                      {
                                        class: 'select form-control-lg',
                                      },
                                      [
                                        UI.createElement(
                                          'option',
                                          {
                                            value: 'city',
                                            disabled: '',
                                          },
                                          'Choose option',
                                        ),
                                        UI.createElement(
                                          'option',
                                          {
                                            value: 'city',
                                          },
                                          'City',
                                        ),
                                        UI.createElement(
                                          'option',
                                          {
                                            value: 'Yerevan',
                                          },
                                          'Yerevan',
                                        ),
                                        UI.createElement(
                                          'option',
                                          {
                                            value: 'Seoul',
                                          },
                                          'Seoul',
                                        ),
                                        UI.createElement(
                                          'option',
                                          {
                                            value: 'Tokio',
                                          },
                                          'Tokio',
                                        ),
                                      ],
                                    ),
                                    UI.createElement(
                                      'label',
                                      {
                                        class: 'form-label select-label',
                                      },
                                      'Choose option',
                                    ),
                                  ],
                                ),
                              ],
                            ),
                          ]),
                          UI.createElement(
                            'div',
                            {
                              class: 'mt-4 pt-2',
                            },
                            [
                              UI.createElement('input', {
                                'data-mdb-ripple-init': '',
                                class: 'btn btn-dark btn-lg btn-block',
                                type: 'submit',
                                value: 'Submit',
                              }),
                            ],
                          ),
                        ]),
                      ],
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ]),
    ]),
    createFooter(),
  ]);

  UI.render(container, document.body);
}

setInterval(() => {
  updateFooter();
}, 1000);

createRegistrationLayout();
toggleThem();
