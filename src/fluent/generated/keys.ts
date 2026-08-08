import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'f6969972b7334dc4888f8ff07bd4fb89'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e6e1b7f4a1174d5a87f0e4ab4cd33824'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0132a94b5b734b86b7bf87291f1e0113'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '044d355e603746029459dd822a7ad70b'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'edition'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0525f257dc07448483312248ea784afa'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'po_reference'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '057e2fca944346c69747894092f72c22'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_entitlement'
                            col_name_string: 'product'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '068a30b1df8e49b8a8cb6f85a6fee720'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'product_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '0769a5c904704630afde69bcddf5332d'
                        key: {
                            category: 'x_1970512_softwa_0_allocation'
                            prefix: 'ALC'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '078d20db018d4430a73a514dd75e0cd9'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0874c4b6a1dd4df5b9ae452a58ea0243'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '08b8208f981a4fbe983fc2ade1ef262a'
                        key: {
                            category: 'x_1970512_softwa_0_purchase_order'
                            prefix: 'PO'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '09c9c9fe3af64f2996e012c837ec4056'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'unit_cost'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0b129e7186db4d25b91f227d8778abce'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'reconciliation_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0b26f105962a452fac74028b14d5c500'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'allocated_date'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '0ba9df8e7cd44c6aa16cf84b4bec8543'
                        key: {
                            sys_ui_form: {
                                id: '324a4436350743e599c34664fbbddcba'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0ce470e59ac94627936b9de9b1f02cb4'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'number'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '0d20c447931683100901f3255d03d645'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0dbbe3ccac034583ae83ee6daf3a00a0'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_cost'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0e7063596a124b0ebeeda32ce6b143ef'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'compliance_status'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0ef532cc54a243edbc33e35e5f803db8'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'available_rights'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '0ef66ac9fd504e53a6f823a1fd202211'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_entitlement'
                            col_name_string: 'contract'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0f02097adbf845ecb6368e8cf64e7d12'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'days_inactive'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '0f0e43a1a7e84765a2411df7f2ac48b4'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0f8531dd58494b55b56cac6ada09284b'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1038d16491f746b0af40c855c4ce74d2'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'days_inactive'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '12790ea4f98a4d528d48e8c426983c7f'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'platform'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '133004071ebf4d168accfe1514685504'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'entitlement'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1398e205df564670a849dc830dcbe896'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'cost_center'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '150b6cf8013a413f9698a8d4b6b921ef'
                        key: {
                            name: 'x_1970512_softwa_0.manager'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '156a0ecf6ab741ccabd15e1f4148e378'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'publisher'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '177fa5f2ab2b407d9e3efaa8d3268a4b'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_usage'
                            col_name_string: 'allocation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '18668e93d1db42cd982d0bbf357d6eb4'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '188167b989c7479aa60e310c0c83d4d0'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1883f3d8dafe47e6a459bd21caa92be0'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'contract'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1940291ece674716a946883a7303771a'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b3ef174b11c4e66939b56f56442b195'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '1c308790c2b444bcb7ba7d48f5490b48'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1d2765ecd1fb4238986c1f691b6aad29'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovered_publisher'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1d75672f507a4e459478a4bd85e286b8'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1e53fa03906246969af1ff2e479cf9b2'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1ee203e908884dff9fc5c94bf39dbf96'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1fc948f780e94c039ee2010b42445ee1'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'vendor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2103e1f601724bc583220db00529afc4'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'purchased_rights'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '23214a05c9e345c78aae2989a456f892'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '237fe19b55b14ccab7fac9ab8ea192ff'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'total_entitlements'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2947f792bd8549c5a0592f8e5e671c6d'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'user_contacted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a9c9c58e4964d9bb6aadc68d244a2f2'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'last_used_date'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2affea5fa56643c88f887cdbac8e4c3f'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                            value: 'per_device'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '2b3832353c8141298bd55a77d89a6377'
                        key: {
                            sys_ui_form: {
                                id: '9660b6bb84fe49fda90d00ab72c26189'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2cd91f6c54774688a411f6a43af1b063'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'total_installations'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d03e15056f94624bdbf5fbe6fd086d9'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2d7075819b084510bbfdab859e2e4a41'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2d8a772d1946414eb07920a43c1c0fcd'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'total_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2dd3d491cf8948a2ad5511f04fe740a1'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reclamation_state'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2ec0ccd82d2c45ac899215af0b77d3ac'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                            value: 'per_concurrent_user'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2f4b7b1260e04452859a447f791d3dc9'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'product'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2fcb461db8344568925d85d86d39f88e'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'total_hours_used'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2ff09ad9bd25438ca4985aba9d4dbc88'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalized_product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '30f42a18eaa54a9e8a7b2e948e3e14de'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '322ba9d9ee5547ddb6e0e4bad8a8b1ca'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'start_date'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '324a4436350743e599c34664fbbddcba'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '33100447931683100901f3255d03d6e2'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '34b3605e42b9405d974cd84113578cc1'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'last_used_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '369fadcd2c2c40c9b6c947f83ffc6a3c'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'license_key'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '36cb5d4eadaa4013b7694ccbe2dcfa6a'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'status'
                            value: 'revoked'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '397b246637e54f1083b9e6b158c5ea3a'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'allocated_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '399b30d1856d4c199380ed32b562a8c9'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'edition'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3adbcd7fe1b141998d515b765b4556f2'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'pending_revocation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '3afdcde3df654674a58734502cdf4ff6'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_reconciliation'
                            col_name_string: 'product'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '3bc8c8c3f60049df8f46ca1f54515495'
                        key: {
                            name: 'x_1970512_softwa_0.auditor'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3d7529a6b54149598214ddd779f28fcb'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '3f417468510a437aa837e82ec9aa7a97'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            value: 'servicenow_discovery'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '3f6bda16233b435fa81b884912bd210d'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '3fe4fb4ed95241ddb40703a2ec2e208c'
                        key: {
                            sys_ui_form: {
                                id: '495a2545c89b4121aff4a52fe66b27f1'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40199577e9c6413284043f8af10bc947'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4040ea9911e4492e8b2341b4f2814312'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4071c505c3b947e783bffd01a1f08642'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '40f5cfc9af234e5ca521901f06de32ce'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalized_product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '41100047931683100901f3255d03d6cc'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '432c84e453984691b4242ad1cca62074'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_allocation'
                            col_name_string: 'entitlement'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '442f67251b554d75b0a64d876c25e7c9'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'financial_exposure'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '44f03137f8ea4db39c1d8d4887a0c06f'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'total_entitlements'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '45d757fcaa214e13b003c0677fa45e50'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'po_reference'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4664fe583923498bad8a587bef733bbe'
                        key: {
                            category: 'x_1970512_softwa_0_reconciliation'
                            prefix: 'REC'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4898218926264c8d8ee1eb89d470881c'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'discovery_source'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '48ff493168424158aec824487038bdab'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '495a2545c89b4121aff4a52fe66b27f1'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '49ae8366efe44953866e1aa55fa21aca'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'status'
                            value: 'pending_revocation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a7e6bf2753a43a1a65c11b86e35ed35'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4ad3cecc92b848bb86ee75c743418f36'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'total_cost'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4ae405321bb84dd1a11048c6b88087ba'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'days_inactive'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b74e9046a3c4c3097507d2bf9758c65'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'installed_for_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4cdeacd1bad4469dab8a5736e7ad7cc4'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'allocation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4da84a46b0944eb29a67a9b5736d6753'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'product_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4e3b15a297ea484e86784ca20df846b0'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4e882344e6aa40c192a63adf3f8d4718'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f9c8b6e92ff4bf29d1f5ca7cf82f872'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'active'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '503a340412f945e0b0b0c4839eadb2a8'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_installations'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '51ce7441e8dd4d17b87879772df0e734'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'compliance_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '536eb262926c433a849e2b82c9350613'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5596b1fb4300473284172a2c35d49e72'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'reclaimed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '564671378ed742ccbbab0e50ed7f7bc9'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '56cc593bd9104f458c3f0bdd2cc52191'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '57969793cfa24fff9f3424cf8527f5e3'
                        key: {
                            sys_ui_form: {
                                id: 'fc9df968b86648509967db082bc33f76'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '57ce6572c4ff42578a97bf486b526082'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'compliance_status'
                            value: 'under_licensed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '582629a7a2994e979c0cc8912b5eda0f'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '583254b5dcd34cb784a477f449f5898c'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'purchased_rights'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '594417ef61d14e599abf2a1523766b78'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allocated_date'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5a89156767ef474381477e9771a203eb'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            value: 'expired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '5b2a74513f084a2d8e30f669c7c7b41a'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'assigned_to_user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5b5d2322311f4a679643df3803f0d810'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5c92b1ee7d9f4398bdef5574391b98d2'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5d205af7179e4c4995306ee4fe5b1dd2'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '14'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5dc93b9df1fd4271816a1d8effd1f557'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'po_number'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5e4a81dde1254962813623173088c215'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f6e79b5de534c509b1baa80e1f898e0'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            value: 'expiring'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5f703b09da104f4994cf3268cd4b8e33'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            value: 'jamf'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '5fb9636618a14299ae387caeb8c112f5'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_purchase_order'
                            col_name_string: 'vendor'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '602aca305c764539a220b31ead5fb52f'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '606167a691ba4b6b884779b1dff3372b'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '65edaa52522b4c3595dd71a09a0848ba'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'is_approved_software'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '65fa2c75ec534f4fb1032369a66c1bb4'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '672c34dd0c454c909aaba3c0757b70c1'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '68e807e1611b401fa858c837f436ad07'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'licensing_metric'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6a348125fe2841fd90e27fe3b836c4e3'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'last_used_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6af7543d513b4f57a2ceb213000fe025'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovered_product'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6b3a8565595945ee8ea78f5b109b99e9'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            value: 'sccm'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6b58fd6d4af14942ae47e3a7e61ac774'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installation'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '6c771387ecb74b11912f0b8c61943098'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6d725c27e77a45b18803b5f24ac2f090'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'installed_on_device'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6eb9109393964f0ebc23da74ee9a09ff'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalization_status'
                            value: 'unnormalized'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6ef65f266f27466baf6d0b6da76fc50b'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f9d8eceeb2c4a279208861320ea5653'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            value: 'linux'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6fdd99aacb314bb4bd934cc608ad11e5'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            value: 'draft'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '71bc42c5d33d4f05b584e396478ae8a6'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'product_name'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '7210c047931683100901f3255d03d672'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '73ac0fd0549a4389b8bbf85dbc10fa10'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '74b905e7c2b4438fa97d0ee9503721fb'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'assigned_to_device'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7537bca2abc441aeb870a0a72ed5e8cc'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'compliance_status'
                            value: 'over_licensed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '75a86cc1c9184ee1bf89030c33e9da38'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'unit_cost'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '75bb1ae54a3b4625829e0c22051ecf9a'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'is_approved_software'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '783a8494bcf1470a8181337f6617ed54'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '78f57cd41ada4687a0e07c3b2c292a85'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'normalized_product'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '794b6c4ce59b4a2086f6e8e8fc329e54'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'allocated_rights'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '7b101bc5f2db459085244b101b917c4a'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_installation'
                            col_name_string: 'normalized_product'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7bc81354846e4e388e9bf6bbcb34477f'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7bce058c48174377bf9e4dbbe198aeea'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalization_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c34da494dd34147bb9231db9eeb8c7e'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'vendor'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cda8ba629934e6984417135d6165219'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'compliance_status'
                            value: 'compliant'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f157bfbaf7a44188555b2545ad4ff3e'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'edition'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7fa3734ce7254a309a9131644740cdfc'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '80bd80b04ad345e7a2d939f231c96be4'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                            value: 'per_user'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '80cf7d99a00d4d39b3bf1f5932fc6725'
                        key: {
                            category: 'x_1970512_softwa_0_entitlement'
                            prefix: 'ENT'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '80fa0b2d2e03469ba654294e90c672fb'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'contract'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '81c4e5b8f8fd4950ac66049422e6499c'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'available_rights'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8220565531f14581828e49b941168f55'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '84aa5984355040b8b4ed090e461c0065'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '856a29e1487a4eb3bf6549ccad93ea2e'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalization_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '85b6b4d80b724c88b9e63c0d6e502c0d'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'end_date'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '85dcdbf7418042a3a5ab7de971f2023a'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'financial_exposure'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '877ba93c85e94e67ba5a483d43954b47'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'flagged_inactive'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '88a5f5d708b847028570341827435cd8'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8a37c8f3d29f4b528ebe8d7d4f6033f2'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_entitlements'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ac6c7f23ea64316ac2c093af464fd93'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'publisher'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '8acd6dc695f04d67ade6f401fd1e8c6f'
                        key: {
                            category: 'x_1970512_softwa_0_product_catalog'
                            prefix: 'PRD'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '8c48b75130054f6b8dd4fe59cf93a0e2'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8cdd2bc1590b48ad92acc0feb8da2a73'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'installed_on_device'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8cef5a42680a4db48a656cdf0282e49b'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8dceab050edb481bb289297aa04a31e1'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            value: 'exception_granted'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8df3cb1a15304ebf8a763b9fd3a34705'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'purchased_rights'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8e05876b70734952a83aa51509a97a0d'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'installed_for_user'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f2da1e3664c4ba9b8ae446bb7c7ec03'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            value: 'cloud'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8f303a732c7d48508bf818e8ae9348cc'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalization_status'
                            value: 'normalized'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '90204447931683100901f3255d03d6cb'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '90aa0ebc81204e1db0391e7243752857'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'assigned_to_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '910a68a625944c2ab22d244fdfa76df3'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'available_rights'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '939f1a7923bb47cfade1c3ea75026917'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '93a1b12f06ee464fb1c7654a7682c98d'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'is_approved_software'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '95064f5336a147c982dd18908e2fba5e'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovered_product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '958ff60c207e4c20aded6b6861e3d32e'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: '96571ccea3ff404397e9ddd6544cb563'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_purchase_order'
                            col_name_string: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9660b6bb84fe49fda90d00ab72c26189'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '97100447931683100901f3255d03d603'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97d8efa33011481ab528b819136c481f'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to_device'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '97f5d871d0f94210ae84f0252503596b'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                            value: 'per_core'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '982d02c8ed4643269b13aca845712faf'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9cd40c996fcf417bb55dbd8cd324667d'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'reconciliation_date'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '9cde7d50d49144aebb4124a86214b10c'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9cefdf25e12844838cc37364600fac24'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'po_reference'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e76423c8aa8494c91455660ad6bf16e'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            value: 'agent'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9eb9a450c16647ff913ec393dc54b99f'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'financial_exposure'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a07c63fe765c467a9d8bfee3c2ed7e07'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_entitlement'
                            col_name_string: 'po_reference'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a0bef6aab985480eaee4289a2247cf5a'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'a310fa8579d9488095eee11078a0a562'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_usage'
                            col_name_string: 'installation'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a326f628f26c4eb38493a273e27beaad'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'license_key'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a54d6637ac824ee3a2ed3adcc320d9fa'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            value: 'mac'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a632d8ff3a5e4e15a8a6b7d18e9f2400'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'allocated_rights'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a69d004a5ce242e59aa50e30b48598d0'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a722d98448f94e8eb45b591cdc78f235'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a791983c59454010a6ad25ae26856ac9'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8f9ff4080f441f09385d49df8f1528a'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            value: 'saas'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a94fd459e7924331b8692d3a221936cc'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'platform'
                            value: 'windows'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ab68bb285e0b4ffe80ee82e06af0d7a4'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'total_installations'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'abacdd47ae54462cbd2546be4142d619'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'start_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'acf41c2c455f4fd590559876bee798e0'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'product'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ad33569e0cfa4eb5ba8ff0288a5e4fe2'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            value: 'ordered'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'ad7403482f0142eda358a71049b2ebf3'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_product_catalog'
                            col_name_string: 'publisher'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'b007c6d68fb84a53a719c1acdf43dc67'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_allocation'
                            col_name_string: 'assigned_to_user'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'b1104047931683100901f3255d03d6c1'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b2683ac8957145d5844cc27c9cdc6f15'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'end_date'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b2a57762005f4ccdbf877e21877dc30f'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'status'
                            value: 'allocated'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b313ada242d54f038efcfe7b95bc5ba2'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'reconciliation_date'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b46457c640734fafaa2cee541dab56ec'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'normalization_status'
                            value: 'match_failed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b54968fd2a4a4582bf2a360949832d07'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'publisher'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b584b4f62398477fa528f14c1e08eed0'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b65fc0b7d74f4a68974dd3adc1605e21'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovered_publisher'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b689300af3694e3d94dc70afe41ee132'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'b737198d68734bc8bf9c21c6b633f394'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b7c8d6866ea24244819b9bf3ac8861fb'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allocated_rights'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7dd7b051a024a07bb3e2d19fa23777b'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b81bfe41f2f34a61a2710b3c48f194e3'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'installation'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8fba3ba37fa4699b4004e503137c700'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                            value: 'retired'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba32ec913883404cb0281b6667cfe893'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bac6726aaa6c4f52ac81d0171b7e495f'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bae70aca7475472aac4f0fc0453e6d44'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'license_key'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bbb6ffd8f4fc4846aa5864d40739d882'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'bd684cf54c3f41fcabfcc55028de2237'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'licensing_metric'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdffb7fa5de14ffca661fd2b58f61478'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'be0521bd7d51421582d83c86d8ac54aa'
                        key: {
                            category: 'x_1970512_softwa_0_usage'
                            prefix: 'USG'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'bfca853e83c74323a858190b8bef63e3'
                        key: {
                            category: 'x_1970512_softwa_0_installation'
                            prefix: 'INS'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c06d7c3315694e85a884fbaa417be655'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'status'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'c2000623caa24604ba510af39a71232b'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_installation'
                            col_name_string: 'installed_for_user'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c381eea839804338b362e349afdef154'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c3bb1064b57e4819a69ab65dce3593ed'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'installation'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c411129c87714915a6f0984a1d7226fd'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c4f040b0d09d47c6a00a5f15d6f906bb'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'total_hours_used'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c61f5dec754b4244b18487b11681da73'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c631fa95562e4c4eb80f5c52cb0f612f'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'assigned_to_device'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c72c8340a3d14b64b1edc5e53b552b8f'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8edde52f65946a9b5964b9cede9ff29'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installed_on_device'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'c8f6a5102933442ca2207f4b089d26c0'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c97fc61416024f28a5f13c25f7ea40d0'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c9fcbea2d3e34ce5bc9ddef3ca1a8f99'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'entitlement'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'ca0f57bfdbc447ba89009cb80ee54d09'
                        key: {
                            sys_ui_form: {
                                id: 'e78b3f240daa4cb29f05beee21b07017'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cb4b1ae71b584ae78726a98f15c761c8'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'compliance_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cbaf73eccca34f3292f772029f117b15'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            value: 'pending_approval'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cbf37e50d4a24cca81933ec4d4029582'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'cee7c2cd44a24038afbdf8a09651bf77'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'cost_center'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'd117c0f046c8472ba01ad092e28490ca'
                        key: {
                            sys_ui_form: {
                                id: 'fd598b9896a04850bab6b79c25fcec95'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'd3f0b2b6142a4d6882cc8938a867a516'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_allocation'
                            col_name_string: 'assigned_to_device'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd5934be8c6c04588adf8013c9e006e48'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'contract'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd7abb2d2a57d492e9918b6fa6063f913'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'discovered_product'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dc8153ec246a4ec29bdfb5c6f5e0a91b'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'total_hours_used'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'de8f438a1d5e41699b28ba2764eb392e'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'allocation'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'def18647a90242478bf270784b834110'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'installed_for_user'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dffbaef534644f5aae16c5580cf4db7a'
                        key: {
                            sys_ui_section: {
                                id: '939f1a7923bb47cfade1c3ea75026917'
                                key: {
                                    name: 'x_1970512_softwa_0_entitlement'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'unit_cost'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'e0102e66834e4109bb782041de87347d'
                        key: {
                            sys_ui_form: {
                                id: '84aa5984355040b8b4ed090e461c0065'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e02b141d16944544a5170d719a13de09'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e11414b9435d45adb5b0c9ba481476f4'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'vendor'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e28630c30f8444f6be5d5fed87268274'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e3ba1c1cad2a4998b0bfdbd62006f991'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'start_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e4304ec4a564497b92a88c56fb0567d7'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'po_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e47a800bcfe94e3aa5b125019181ed65'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'po_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e4cb8ff6281c4b7d92cb140a8c7906c8'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'end_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e6e8a253df8c4dfa9c372ec05d716675'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'allocation'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'e78b3f240daa4cb29f05beee21b07017'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eaeeff440c934ab0aa8970d8d8ffbd3b'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_index'
                        id: 'eb2ffab83c33477692db1e9460dc534f'
                        key: {
                            logical_table_name: 'x_1970512_softwa_0_installation'
                            col_name_string: 'installed_on_device'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ecbf76e758974bae97643b06e0a03680'
                        key: {
                            sys_ui_section: {
                                id: '65fa2c75ec534f4fb1032369a66c1bb4'
                                key: {
                                    name: 'x_1970512_softwa_0_product_catalog'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            caption: 'General'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ed7506800747438598d75a3ba81d0a2b'
                        key: {
                            sys_ui_section: {
                                id: 'ed1bd0787c4a4cbc9f453dd49aef6aec'
                                key: {
                                    name: 'x_1970512_softwa_0_usage'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'edb3b61e3adb4e649ce5aac0ec50e7d3'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to_user'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'ee04d0db35a641169618446c4898d629'
                        key: {
                            name: 'x_1970512_softwa_0.admin'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eeaee7397f89452d87774d39c8cbe0ba'
                        key: {
                            name: 'x_1970512_softwa_0_product_catalog'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eef1135b7c3d46189ba04350fd22f09d'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'product'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f01a62a5341146bab4ad628f6809d491'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            element: 'status'
                            value: 'received'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f212f9029b46435aa2d11c8fa2194bee'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                            value: 'manual'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f230b7e1cccc4205b2e3282f99c1a722'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'normalization_status'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f3695d1ced2246bfaed58ba74df2d0bd'
                        key: {
                            name: 'x_1970512_softwa_0_reconciliation'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3fb4ef2d07c48c2bbd17a3e39b9ee10'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'reclamation_state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f4ea186239a04e8688503f77c362d188'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f77129769d31457cbb9108833ea823e1'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                            element: 'entitlement'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f852eb2353cf4b17b516bcb846952f7a'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f861b0d8a07e435398da3f27f840a2f3'
                        key: {
                            name: 'x_1970512_softwa_0_installation'
                            element: 'discovery_source'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fa1e7294447a4fc2963e67f6e2b8f6db'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fc167559efd1412da41a1b80829e9a1f'
                        key: {
                            sys_ui_section: {
                                id: '6c771387ecb74b11912f0b8c61943098'
                                key: {
                                    name: 'x_1970512_softwa_0_installation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'discovered_publisher'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'fc9df968b86648509967db082bc33f76'
                        key: {
                            name: 'x_1970512_softwa_0_purchase_order'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fd32c4fa6e714b53b96bca3b15388dab'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'fd598b9896a04850bab6b79c25fcec95'
                        key: {
                            name: 'x_1970512_softwa_0_usage'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fe1bbaa48c3c49d483affe49ee60c307'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'fea2d6f1a89f4ea9966d2d305222a2da'
                        key: {
                            name: 'x_1970512_softwa_0_allocation'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'feed0139c4664e91975add5b50cfaff5'
                        key: {
                            sys_ui_section: {
                                id: '4071c505c3b947e783bffd01a1f08642'
                                key: {
                                    name: 'x_1970512_softwa_0_purchase_order'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cost_center'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff30304d885a4a0f92afbe737e857042'
                        key: {
                            sys_ui_section: {
                                id: '1c308790c2b444bcb7ba7d48f5490b48'
                                key: {
                                    name: 'x_1970512_softwa_0_reconciliation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff5e798b38534977851705a4f4cf8922'
                        key: {
                            sys_ui_section: {
                                id: '188167b989c7479aa60e310c0c83d4d0'
                                key: {
                                    name: 'x_1970512_softwa_0_allocation'
                                    caption: 'General'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ffacab13d51140b290b38e1244687c5a'
                        key: {
                            name: 'x_1970512_softwa_0_entitlement'
                            element: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
