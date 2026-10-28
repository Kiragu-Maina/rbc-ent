export type Technology = {id:string;name:string;category:"commercial"|"open-source"|"framework";practices:string[];website:string;logoSource:string|null;logoPath:string|null;relationshipStatus:"unverified";expertiseStatus:"proposed";assetVerificationStatus:string;logoPolicy?:string;linkVerificationStatus?:string;logoAudit?:{source:string;package?:string;license?:unknown;guidelines?:string|null;note:string;status:string}};
export const technologies:Technology[] = [
  {
    "id": "microsoft-dynamics-365",
    "name": "Microsoft Dynamics 365",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.microsoft.com/dynamics-365",
    "logoSource": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Dynamics_365_Icons_scalable/Dynamics%20365%20Product%20Family%20Icon/Dynamics365_scalable.svg",
    "logoPath": "/technologies/products/microsoft-dynamics-365.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Dynamics_365_Icons_scalable/Dynamics%20365%20Product%20Family%20Icon/Dynamics365_scalable.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "sap",
    "name": "SAP",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.sap.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/sap.svg",
    "logoPath": "/technologies/simple-icons/sap.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoPolicy": "https://www.sap.com",
    "logoAudit": {
      "source": "https://www.sap.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "oracle",
    "name": "Oracle",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.oracle.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/oracle.svg",
    "logoPath": "/technologies/dashboard-icons/oracle.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/oracle.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "odoo",
    "name": "Odoo",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.odoo.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/odoo.svg",
    "logoPath": "/technologies/simple-icons/odoo.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.odoo.com/page/brand-assets",
    "logoAudit": {
      "source": "https://www.odoo.com/page/brand-assets",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.odoo.com/page/brand-assets",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "zoho",
    "name": "Zoho",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.zoho.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zoho.svg",
    "logoPath": "/technologies/simple-icons/zoho.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.zoho.com/branding",
    "logoAudit": {
      "source": "https://www.zoho.com/branding",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "salesforce",
    "name": "Salesforce",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.salesforce.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/salesforce.svg",
    "logoPath": "/technologies/dashboard-icons/salesforce.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/salesforce.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "microsoft-power-platform",
    "name": "Microsoft Power Platform",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.microsoft.com/power-platform",
    "logoSource": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Power_Platform_scalable/PowerPlatform_scalable.svg",
    "logoPath": "/technologies/products/microsoft-power-platform.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Power_Platform_scalable/PowerPlatform_scalable.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "shopify",
    "name": "Shopify",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.shopify.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/shopify.svg",
    "logoPath": "/technologies/simple-icons/shopify.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.shopify.com/brand-assets",
    "logoAudit": {
      "source": "https://www.shopify.com/brand-assets",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.shopify.com/brand-assets",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "adobe-commerce",
    "name": "Adobe Commerce",
    "category": "commercial",
    "practices": [
      "software-engineering"
    ],
    "website": "https://business.adobe.com/products/commerce.html",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/adobe.svg",
    "logoPath": "/technologies/products/adobe-commerce.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/adobe.svg",
      "note": "Adobe corporate mark with explicit Adobe Commerce text. Adobe retired the distinct Magento Commerce application logo; this is not a new product-specific mark."
    }
  },
  {
    "id": "erpnext",
    "name": "ERPNext",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://frappe.io/erpnext",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/erpnext.svg",
    "logoPath": "/technologies/simple-icons/erpnext.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/frappe/erpnext/blob/924911e74317f95a59f29e9410d4f141020a0411/erpnext/public/images/erpnext-logo.svg",
    "logoAudit": {
      "source": "https://github.com/frappe/erpnext/blob/924911e74317f95a59f29e9410d4f141020a0411/erpnext/public/images/erpnext-logo.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "frappe-framework",
    "name": "Frappe Framework",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://frappe.io/framework",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/frappe.svg",
    "logoPath": "/technologies/simple-icons/frappe.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/frappe/frappe/blob/1331fa6f721122805d15894fa3bd9eb90dccdca2/frappe/public/images/frappe-framework-logo.svg",
    "logoAudit": {
      "source": "https://github.com/frappe/frappe/blob/1331fa6f721122805d15894fa3bd9eb90dccdca2/frappe/public/images/frappe-framework-logo.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "odoo-community",
    "name": "Odoo Community",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.odoo.com/page/community",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/odoo.svg",
    "logoPath": "/technologies/simple-icons/odoo.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.odoo.com/page/brand-assets",
    "logoAudit": {
      "source": "https://www.odoo.com/page/brand-assets",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.odoo.com/page/brand-assets",
      "note": "Authentic parent platform/vendor mark accompanied by the exact requested product or edition name.",
      "status": "acquired"
    }
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://www.postgresql.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/postgresql.svg",
    "logoPath": "/technologies/simple-icons/postgresql.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.postgresql.org/about/policies/trademarks/",
    "logoAudit": {
      "source": "https://wiki.postgresql.org/wiki/Logo",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.postgresql.org/about/policies/trademarks/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "directus",
    "name": "Directus",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://directus.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/directus.svg",
    "logoPath": "/technologies/simple-icons/directus.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://directus.io",
    "logoAudit": {
      "source": "https://directus.io",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "strapi",
    "name": "Strapi",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://strapi.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/strapi.svg",
    "logoPath": "/technologies/simple-icons/strapi.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://handbook.strapi.io/strapi-brand-book-2022",
    "logoAudit": {
      "source": "https://handbook.strapi.io/strapi-brand-book-2022/strapi-logo",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://handbook.strapi.io/strapi-brand-book-2022",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "medusa",
    "name": "Medusa",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://medusajs.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/medusa.svg",
    "logoPath": "/technologies/simple-icons/medusa.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/medusajs/medusa/blob/5b91a3503af41b94697a5c27c35268c29e9bd135/www/docs/static/img/logo.svg",
    "logoAudit": {
      "source": "https://github.com/medusajs/medusa/blob/5b91a3503af41b94697a5c27c35268c29e9bd135/www/docs/static/img/logo.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "woocommerce",
    "name": "WooCommerce",
    "category": "open-source",
    "practices": [
      "software-engineering"
    ],
    "website": "https://woocommerce.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/woocommerce.svg",
    "logoPath": "/technologies/simple-icons/woocommerce.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://woocommerce.com/trademark-guidelines",
    "logoAudit": {
      "source": "https://woocommerce.com/style-guide",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://woocommerce.com/trademark-guidelines",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "openai",
    "name": "OpenAI",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://openai.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/openai.svg",
    "logoPath": "/technologies/dashboard-icons/openai.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/openai.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "anthropic",
    "name": "Anthropic",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.anthropic.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/anthropic.svg",
    "logoPath": "/technologies/simple-icons/anthropic.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.anthropic.com",
    "logoAudit": {
      "source": "https://www.anthropic.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "microsoft-fabric",
    "name": "Microsoft Fabric",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.microsoft.com/microsoft-fabric",
    "logoSource": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Azure_UX_Patterns_icons/microsoft-fabric.svg",
    "logoPath": "/technologies/products/microsoft-fabric.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Azure_UX_Patterns_icons/microsoft-fabric.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "power-bi",
    "name": "Power BI",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.microsoft.com/power-platform/products/power-bi",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/powerbi.svg",
    "logoPath": "/technologies/dashboard-icons/powerbi.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/powerbi.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "azure-ai",
    "name": "Azure AI",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://azure.microsoft.com/products/ai-services",
    "logoSource": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Azure_Public_Service_Icons/Icons/ai%20+%20machine%20learning/10162-icon-service-Cognitive-Services.svg",
    "logoPath": "/technologies/products/azure-ai.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/tomkiljo/ms-icons/main/public/icons/Azure_Public_Service_Icons/Icons/ai%20+%20machine%20learning/10162-icon-service-Cognitive-Services.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "google-cloud-ai",
    "name": "Google Cloud AI",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://cloud.google.com/products/ai",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
    "logoPath": "/technologies/simple-icons/googlecloud.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://cloud.google.com",
    "logoAudit": {
      "source": "https://cloud.google.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Authentic parent platform/vendor mark accompanied by the exact requested product or edition name.",
      "status": "acquired"
    }
  },
  {
    "id": "databricks",
    "name": "Databricks",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.databricks.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/databricks.svg",
    "logoPath": "/technologies/simple-icons/databricks.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://brand.databricks.com/Styleguide/Guide/",
    "logoAudit": {
      "source": "https://www.databricks.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://brand.databricks.com/Styleguide/Guide/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "snowflake",
    "name": "Snowflake",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.snowflake.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/snowflake.svg",
    "logoPath": "/technologies/simple-icons/snowflake.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoPolicy": "https://www.snowflake.com/brand-guidelines/",
    "logoAudit": {
      "source": "https://www.snowflake.com/brand-guidelines/",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.snowflake.com/brand-guidelines/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "nvidia-ai-enterprise",
    "name": "NVIDIA AI Enterprise",
    "category": "commercial",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.nvidia.com/en-us/data-center/products/ai-enterprise/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nvidia.svg",
    "logoPath": "/technologies/simple-icons/nvidia.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.nvidia.com/en-us",
    "logoAudit": {
      "source": "https://www.nvidia.com/en-us",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Authentic parent platform/vendor mark accompanied by the exact requested product or edition name.",
      "status": "acquired"
    }
  },
  {
    "id": "apache-airflow",
    "name": "Apache Airflow",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://airflow.apache.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apacheairflow.svg",
    "logoPath": "/technologies/apache/airflow.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "official-asset-rights-review",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.apache.org/foundation/marks",
    "logoAudit": {
      "status": "rights-review",
      "source": "https://www.apache.org/foundation/marks/",
      "note": "Authentic official project asset. Published automatic permission is for linked use; unlinked presentation requires RBC rights review."
    }
  },
  {
    "id": "dbt-core",
    "name": "dbt Core",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://github.com/dbt-labs/dbt-core",
    "logoSource": "https://raw.githubusercontent.com/dbt-labs/docs.getdbt.com/current/website/static/img/dbt-logo.svg",
    "logoPath": "/technologies/products/dbt-core.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/dbt-labs/docs.getdbt.com/current/website/static/img/dbt-logo.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "apache-spark",
    "name": "Apache Spark",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://spark.apache.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachespark.svg",
    "logoPath": "/technologies/apache/spark.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "official-asset-rights-review",
    "logoPolicy": "https://www.apache.org/foundation/marks",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "rights-review",
      "source": "https://www.apache.org/foundation/marks/",
      "note": "Authentic official project asset. Published automatic permission is for linked use; unlinked presentation requires RBC rights review."
    }
  },
  {
    "id": "apache-superset",
    "name": "Apache Superset",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://superset.apache.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/apachesuperset.svg",
    "logoPath": "/technologies/simple-icons/apachesuperset.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "official-asset-rights-review",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.apache.org/foundation/marks/",
    "logoAudit": {
      "status": "rights-review",
      "source": "https://www.apache.org/foundation/marks/",
      "note": "Authentic official project asset. Published automatic permission is for linked use; unlinked presentation requires RBC rights review."
    }
  },
  {
    "id": "metabase",
    "name": "Metabase",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.metabase.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/metabase.svg",
    "logoPath": "/technologies/simple-icons/metabase.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.metabase.com",
    "logoAudit": {
      "source": "https://www.metabase.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "mlflow",
    "name": "MLflow",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://mlflow.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/mlflow.svg",
    "logoPath": "/technologies/simple-icons/mlflow.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/mlflow/mlflow/blob/855881f93703b15ffe643003fb4d7c84f0ec2502/assets/icon.svg",
    "logoAudit": {
      "source": "https://github.com/mlflow/mlflow/blob/855881f93703b15ffe643003fb4d7c84f0ec2502/assets/icon.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "pgvector",
    "name": "pgvector",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://github.com/pgvector/pgvector",
    "logoSource": null,
    "logoPath": null,
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "audited-exception",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "exception",
      "source": "https://github.com/pgvector/pgvector",
      "note": "Official project repository and the searched icon packages did not provide a distinct pgvector mark. PostgreSQL logo was not substituted."
    }
  },
  {
    "id": "qdrant",
    "name": "Qdrant",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://qdrant.tech/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/qdrant.svg",
    "logoPath": "/technologies/simple-icons/qdrant.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://qdrant.tech/brand-resources/",
    "logoAudit": {
      "source": "https://qdrant.tech/img/brand-resources-logos/qdrant-brandmark-white.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://qdrant.tech/brand-resources/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "haystack",
    "name": "Haystack",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://haystack.deepset.ai/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/haystack.svg",
    "logoPath": "/technologies/simple-icons/haystack.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/simple-icons/simple-icons/issues/12288#issuecomment-2567870921",
    "logoAudit": {
      "source": "https://github.com/simple-icons/simple-icons/issues/12288#issuecomment-2567870921",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "langchain",
    "name": "LangChain",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.langchain.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/langchain.svg",
    "logoPath": "/technologies/simple-icons/langchain.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.langchain.com/langchain",
    "logoAudit": {
      "source": "https://www.langchain.com/langchain",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "llamaindex",
    "name": "LlamaIndex",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://www.llamaindex.ai/",
    "logoSource": "https://raw.githubusercontent.com/run-llama/llama_index/main/docs/src/content/docs/framework/_static/assets/LlamaLogoBrowserTab.png",
    "logoPath": "/technologies/products/llamaindex.png",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/run-llama/llama_index/main/docs/src/content/docs/framework/_static/assets/LlamaLogoBrowserTab.png",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "ollama",
    "name": "Ollama",
    "category": "open-source",
    "practices": [
      "data-ai-automation"
    ],
    "website": "https://ollama.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ollama.svg",
    "logoPath": "/technologies/simple-icons/ollama.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/ollama/ollama/issues/2152#issuecomment-1905286922",
    "logoAudit": {
      "source": "https://github.com/ollama/ollama/issues/2152#issuecomment-1905286922",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "microsoft-azure",
    "name": "Microsoft Azure",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://azure.microsoft.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/microsoft-azure.svg",
    "logoPath": "/technologies/dashboard-icons/microsoft-azure.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/microsoft-azure.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "aws",
    "name": "AWS",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://aws.amazon.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/amazon-web-services.svg",
    "logoPath": "/technologies/dashboard-icons/amazon-web-services.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/amazon-web-services.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "google-cloud",
    "name": "Google Cloud",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://cloud.google.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/googlecloud.svg",
    "logoPath": "/technologies/simple-icons/googlecloud.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://cloud.google.com",
    "logoAudit": {
      "source": "https://cloud.google.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "cisco",
    "name": "Cisco",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.cisco.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg",
    "logoPath": "/technologies/simple-icons/cisco.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate in certificate chain (_ssl.c:1082)>",
    "logoPolicy": "https://www.cisco.com",
    "logoAudit": {
      "source": "https://www.cisco.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "hpe",
    "name": "HPE",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.hpe.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/hpe.svg",
    "logoPath": "/technologies/dashboard-icons/hpe.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/hpe.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "dell-technologies",
    "name": "Dell Technologies",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.dell.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/dell.svg",
    "logoPath": "/technologies/simple-icons/dell.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoPolicy": "https://brand.delltechnologies.com/logos/",
    "logoAudit": {
      "source": "https://www.dell.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://brand.delltechnologies.com/logos/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "lenovo",
    "name": "Lenovo",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.lenovo.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lenovo.svg",
    "logoPath": "/technologies/simple-icons/lenovo.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://news.lenovo.com/press-kits/",
    "logoAudit": {
      "source": "https://news.lenovo.com/press-kits/",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "vmware-broadcom",
    "name": "VMware/Broadcom",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.vmware.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vmware.svg",
    "logoPath": "/technologies/simple-icons/vmware.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://myvmware.workspaceair.com",
    "logoAudit": {
      "source": "https://myvmware.workspaceair.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "nutanix",
    "name": "Nutanix",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.nutanix.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nutanix.svg",
    "logoPath": "/technologies/simple-icons/nutanix.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.nutanix.com/content/dam/nutanix/en/cmn/documents/nutanix-brandbook.pdf",
    "logoAudit": {
      "source": "https://www.nutanix.com/content/dam/nutanix/en/cmn/documents/nutanix-brandbook.pdf",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "nvidia",
    "name": "NVIDIA",
    "category": "commercial",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.nvidia.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/nvidia.svg",
    "logoPath": "/technologies/simple-icons/nvidia.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.nvidia.com/en-us",
    "logoAudit": {
      "source": "https://www.nvidia.com/en-us",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "linux",
    "name": "Linux",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.kernel.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/linux.svg",
    "logoPath": "/technologies/simple-icons/linux.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.linuxfoundation.org/the-linux-mark/",
    "logoAudit": {
      "source": "https://www.linuxfoundation.org/the-linux-mark/",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "proxmox-ve",
    "name": "Proxmox VE",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.proxmox.com/en/products/proxmox-virtual-environment/overview",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/proxmox.svg",
    "logoPath": "/technologies/simple-icons/proxmox.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.proxmox.com/en/news/media-kit",
    "logoAudit": {
      "source": "https://www.proxmox.com/en/news/media-kit",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.proxmox.com/en/news/media-kit",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "openstack",
    "name": "OpenStack",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.openstack.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/openstack.svg",
    "logoPath": "/technologies/simple-icons/openstack.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.openstack.org/brand/openstack-logo/",
    "logoAudit": {
      "source": "https://www.openstack.org/brand/openstack-logo/",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.openstack.org/brand/openstack-logo/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "kubernetes",
    "name": "Kubernetes",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://kubernetes.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/kubernetes.svg",
    "logoPath": "/technologies/simple-icons/kubernetes.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/kubernetes/kubernetes/tree/cac53883f4714452f3084a22e4be20d042a9df33/logo",
    "logoAudit": {
      "source": "https://github.com/kubernetes/kubernetes/tree/cac53883f4714452f3084a22e4be20d042a9df33/logo",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "docker",
    "name": "Docker",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.docker.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/docker.svg",
    "logoPath": "/technologies/simple-icons/docker.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.docker.com/company/newsroom/media-resources",
    "logoAudit": {
      "source": "https://www.docker.com/company/newsroom/media-resources",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "opentofu",
    "name": "OpenTofu",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://opentofu.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/opentofu.svg",
    "logoPath": "/technologies/simple-icons/opentofu.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/opentofu/brand-artifacts/blob/0d4d0d6050ca0ff06471400bc3249a64c145f659/symbol-only/transparent/SVG/on-light-mono.svg",
    "logoAudit": {
      "source": "https://github.com/opentofu/brand-artifacts/blob/0d4d0d6050ca0ff06471400bc3249a64c145f659/symbol-only/transparent/SVG/on-light-mono.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "ansible",
    "name": "Ansible",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://www.ansible.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ansible.svg",
    "logoPath": "/technologies/simple-icons/ansible.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.ansible.com/logos",
    "logoAudit": {
      "source": "https://www.ansible.com/logos",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "prometheus",
    "name": "Prometheus",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://prometheus.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/prometheus.svg",
    "logoPath": "/technologies/simple-icons/prometheus.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://prometheus.io",
    "logoAudit": {
      "source": "https://prometheus.io",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "grafana",
    "name": "Grafana",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://grafana.com/oss/grafana/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/grafana.svg",
    "logoPath": "/technologies/simple-icons/grafana.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://grafana.com",
    "logoAudit": {
      "source": "https://grafana.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "opentelemetry",
    "name": "OpenTelemetry",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://opentelemetry.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/opentelemetry.svg",
    "logoPath": "/technologies/simple-icons/opentelemetry.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://cncf-branding.netlify.app/projects/opentelemetry/",
    "logoAudit": {
      "source": "https://cncf-branding.netlify.app/projects/opentelemetry/",
      "package": "Simple Icons",
      "license": {
        "type": "CC-BY-4.0"
      },
      "guidelines": "https://cncf-branding.netlify.app/projects/opentelemetry/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "ceph",
    "name": "Ceph",
    "category": "open-source",
    "practices": [
      "cloud-infrastructure"
    ],
    "website": "https://ceph.io/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ceph.svg",
    "logoPath": "/technologies/simple-icons/ceph.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: HTTP Error 500: Internal Server Error",
    "logoPolicy": "https://github.com/ceph/ceph/blob/b106a03dcddaee80493825e85bc5e399ab4d8746/src/pybind/mgr/dashboard/frontend/src/assets/Ceph_Logo.svg",
    "logoAudit": {
      "source": "https://github.com/ceph/ceph/blob/b106a03dcddaee80493825e85bc5e399ab4d8746/src/pybind/mgr/dashboard/frontend/src/assets/Ceph_Logo.svg",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "fortinet",
    "name": "Fortinet",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.fortinet.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/fortinet.svg",
    "logoPath": "/technologies/simple-icons/fortinet.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.fortinet.com",
    "logoAudit": {
      "source": "https://www.fortinet.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "cisco-security",
    "name": "Cisco Security",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.cisco.com/site/us/en/products/security/index.html",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cisco.svg",
    "logoPath": "/technologies/simple-icons/cisco.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "Unverified: <urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: self-signed certificate in certificate chain (_ssl.c:1082)>",
    "logoPolicy": "https://www.cisco.com",
    "logoAudit": {
      "source": "https://www.cisco.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Authentic parent platform/vendor mark accompanied by the exact requested product or edition name.",
      "status": "acquired"
    }
  },
  {
    "id": "microsoft-defender",
    "name": "Microsoft Defender",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.microsoft.com/security/business/microsoft-defender",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/microsoft-defender.svg",
    "logoPath": "/technologies/dashboard-icons/microsoft-defender.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/microsoft-defender.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "microsoft-entra",
    "name": "Microsoft Entra",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.microsoft.com/security/business/microsoft-entra",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/entra-id.svg",
    "logoPath": "/technologies/dashboard-icons/entra-id.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: HTTP Error 403: Forbidden",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/entra-id.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "sophos",
    "name": "Sophos",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.sophos.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/sophos.svg",
    "logoPath": "/technologies/dashboard-icons/sophos.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "Unverified: The read operation timed out",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/sophos.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "palo-alto-networks",
    "name": "Palo Alto Networks",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.paloaltonetworks.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/paloaltonetworks.svg",
    "logoPath": "/technologies/simple-icons/paloaltonetworks.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.paloaltonetworks.com/company/brand",
    "logoAudit": {
      "source": "https://www.paloaltonetworks.com",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.paloaltonetworks.com/company/brand",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "crowdstrike",
    "name": "CrowdStrike",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.crowdstrike.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/crowdstrike.svg",
    "logoPath": "/technologies/dashboard-icons/crowdstrike.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/crowdstrike.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "veeam",
    "name": "Veeam",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.veeam.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/veeam.svg",
    "logoPath": "/technologies/simple-icons/veeam.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.veeam.com/newsroom/veeam-graphics.html",
    "logoAudit": {
      "source": "https://www.veeam.com/newsroom/veeam-graphics.html",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "cloudflare",
    "name": "Cloudflare",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.cloudflare.com/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/cloudflare.svg",
    "logoPath": "/technologies/simple-icons/cloudflare.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.cloudflare.com/trademark/",
    "logoAudit": {
      "source": "https://www.cloudflare.com/logo/",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.cloudflare.com/trademark/",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "tenable",
    "name": "Tenable",
    "category": "commercial",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.tenable.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/tenable.svg",
    "logoPath": "/technologies/dashboard-icons/tenable.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/tenable.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "wazuh",
    "name": "Wazuh",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://wazuh.com/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/wazuh.svg",
    "logoPath": "/technologies/dashboard-icons/wazuh.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/wazuh.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "keycloak",
    "name": "Keycloak",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.keycloak.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/keycloak.svg",
    "logoPath": "/technologies/simple-icons/keycloak.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://github.com/keycloak/keycloak-misc/blob/dee033f2d6d6b5c3a6ce8eb84e285f7e5626dbf6/logo/icon-black.svg",
    "logoAudit": {
      "source": "https://github.com/keycloak/keycloak-misc/blob/dee033f2d6d6b5c3a6ce8eb84e285f7e5626dbf6/logo/icon-black.svg",
      "package": "Simple Icons",
      "license": {
        "type": "custom",
        "url": "https://www.linuxfoundation.org/legal/trademark-usage"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "opensearch",
    "name": "OpenSearch",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://opensearch.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/opensearch.svg",
    "logoPath": "/technologies/simple-icons/opensearch.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://opensearch.org/trademark-brand-policy.html",
    "logoAudit": {
      "source": "https://opensearch.org/trademark-brand-policy.html",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://opensearch.org/trademark-brand-policy.html",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "security-onion",
    "name": "Security Onion",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://securityonionsolutions.com/software",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/security-onion.svg",
    "logoPath": "/technologies/dashboard-icons/security-onion.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/security-onion.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "suricata",
    "name": "Suricata",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://suricata.io/",
    "logoSource": null,
    "logoPath": null,
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "audited-exception",
    "linkVerificationStatus": "HTTP 202",
    "logoAudit": {
      "status": "exception",
      "source": "https://suricata.io/wp-content/uploads/2023/09/Logo-Suricata-horiz-R.png",
      "note": "Official logo URL discovered, but download returned HTML rather than image data; branding page also requests permission. No access controls bypassed."
    }
  },
  {
    "id": "zeek",
    "name": "Zeek",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://zeek.org/",
    "logoSource": "https://zeek.org/wp-content/themes/zeek/resources/images/logo.png",
    "logoPath": "/technologies/products/zeek.png",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://zeek.org/wp-content/themes/zeek/resources/images/logo.png",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "owasp-zap",
    "name": "OWASP ZAP",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.zaproxy.org/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/zap.svg",
    "logoPath": "/technologies/simple-icons/zap.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.zaproxy.org",
    "logoAudit": {
      "source": "https://www.zaproxy.org",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": null,
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "trivy",
    "name": "Trivy",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://trivy.dev/",
    "logoSource": "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/trivy.svg",
    "logoPath": "/technologies/simple-icons/trivy.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-package-source-reviewed",
    "linkVerificationStatus": "HTTP 200",
    "logoPolicy": "https://www.aquasec.com/brand",
    "logoAudit": {
      "source": "https://www.aquasec.com/brand",
      "package": "Simple Icons",
      "license": {
        "type": "CC0 package; trademarks retained"
      },
      "guidelines": "https://www.aquasec.com/brand",
      "note": "Product identification only; no endorsement or partnership claim.",
      "status": "acquired"
    }
  },
  {
    "id": "greenbone-openvas",
    "name": "Greenbone/OpenVAS",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://www.greenbone.net/en/community-edition/",
    "logoSource": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/openvas.svg",
    "logoPath": "/technologies/dashboard-icons/openvas.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-package-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://raw.githubusercontent.com/homarr-labs/dashboard-icons/main/svg/openvas.svg",
      "package": "Homarr Dashboard Icons",
      "note": "Public product-identification asset; trademark rights retained. Not evidence of an RBC partnership."
    }
  },
  {
    "id": "velociraptor",
    "name": "Velociraptor",
    "category": "open-source",
    "practices": [
      "cybersecurity-resilience"
    ],
    "website": "https://docs.velociraptor.app/",
    "logoSource": "https://docs.velociraptor.app/images/logo_bare_small.svg",
    "logoPath": "/technologies/products/velociraptor.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://docs.velociraptor.app/images/logo_bare_small.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "togaf",
    "name": "TOGAF",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://www.opengroup.org/togaf",
    "logoSource": "https://www.opengroup.org/sites/default/files/togaf92-logo.png",
    "logoPath": "/technologies/products/togaf.png",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://www.opengroup.org/sites/default/files/togaf92-logo.png",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "archimate",
    "name": "ArchiMate",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://www.opengroup.org/archimate-forum",
    "logoSource": null,
    "logoPath": null,
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "audited-exception",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "exception",
      "source": "https://www.opengroup.org/archimate-forum",
      "note": "Official page assets inspected. Available banner/1-pixel asset is not a usable standalone mark. Certification badges and the unrelated Archi tool logo were excluded."
    }
  },
  {
    "id": "cobit",
    "name": "COBIT",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://www.isaca.org/resources/cobit",
    "logoSource": null,
    "logoPath": null,
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "audited-exception",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "exception",
      "source": "https://www.isaca.org/about-us/cobit-usage-guidelines",
      "note": "ISACA explicitly requires prior written permission for COBIT logos in marketing. No certification badge or unrelated COBIT-named product substituted."
    }
  },
  {
    "id": "itil",
    "name": "ITIL",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-1",
    "logoSource": "https://www.peoplecert.org/-/media/folders-reorganized/images/peoplecert-logos-official/product-brand-logos/itil/itil-logo-svg.svg",
    "logoPath": "/technologies/products/itil.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "authentic-public-source",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://www.peoplecert.org/-/media/folders-reorganized/images/peoplecert-logos-official/product-brand-logos/itil/itil-logo-svg.svg",
      "note": "Public product-identification asset; original proportions retained. Trademark rights retained."
    }
  },
  {
    "id": "bpmn",
    "name": "BPMN",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://www.bpmn.org/",
    "logoSource": "https://www.omg.org/images/logos/BPMN-logo.svg",
    "logoPath": "/technologies/products/bpmn.svg",
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "official-public-asset",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "acquired",
      "source": "https://www.omg.org/images/logos/BPMN-logo.svg",
      "note": "Official public product mark; trademark rights retained."
    }
  },
  {
    "id": "c4-modelling",
    "name": "C4 modelling",
    "category": "framework",
    "practices": [
      "technology-advisory"
    ],
    "website": "https://c4model.com/",
    "logoSource": null,
    "logoPath": null,
    "relationshipStatus": "unverified",
    "expertiseStatus": "proposed",
    "assetVerificationStatus": "audited-exception",
    "linkVerificationStatus": "HTTP 200",
    "logoAudit": {
      "status": "exception",
      "source": "https://c4model.com/",
      "note": "Official site and icon packages inspected; no distinct authentic framework logo located. Book cover and architecture diagrams were not treated as logos."
    }
  }
];
