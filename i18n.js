/**
 * Internationalization (i18n) System for Inch to CM Converter
 * Supports: English (default), Chinese, Japanese, Spanish, French, German
 */

const i18n = {
    currentLang: 'en',
    
    languages: {
        en: { name: 'English', flag: '🇺🇸' },
        zh: { name: '中文', flag: '🇨🇳' },
        ja: { name: '日本語', flag: '🇯🇵' },
        es: { name: 'Español', flag: '🇪🇸' },
        fr: { name: 'Français', flag: '🇫🇷' },
        de: { name: 'Deutsch', flag: '🇩🇪' }
    },
    
    translations: {
        en: {
            // Header
            title: "Inch to CM Converter",
            subtitle: "Convert between inches and centimeters instantly with our accurate and easy-to-use conversion tool",
            
            // Converter
            inches_to_cm: "Inches to Centimeters",
            cm_to_inches: "Centimeters to Inches",
            enter_inches: "Enter Inches:",
            enter_cm: "Enter Centimeters:",
            enter_inches_placeholder: "Enter inches",
            enter_cm_placeholder: "Enter centimeters",
            
            // Table
            common_conversions: "Common Conversions Reference",
            table_inches: "Inches",
            table_cm: "Centimeters",
            
            // About
            about_title: "About This Conversion Tool",
            about_learn: "Learn how to use this tool effectively",
            about_guide: "with our comprehensive guide.",
            demo_notice: "Demo values showing: 10 inches = 25.4 centimeters",
            
            // Formula
            formula_title: "Conversion Formula",
            formula_in_to_cm: "1 inch = 2.54 centimeters",
            formula_cm_to_in: "1 centimeter = 0.393701 inches",
            
            // Quick Reference
            quick_ref_title: "Quick Reference",
            quick_ref_1: "1/4 inch = 0.635 cm",
            quick_ref_2: "1/2 inch = 1.27 cm",
            quick_ref_3: "3/4 inch = 1.905 cm",
            quick_ref_4: "1 inch = 2.54 cm",
            quick_ref_5: "2 inches = 5.08 cm",
            quick_ref_6: "6 inches = 15.24 cm",
            quick_ref_7: "12 inches (1 foot) = 30.48 cm",
            
            // Footer
            footer_copyright: "© 2026 inch-to-cm.online - Free Online Length Conversion Tool",
            footer_tagline: "Accurate inch to cm and cm to inch conversions made simple",
            
            // Meta
            meta_title: "Inch to CM Converter - Free Online Length Conversion Tool",
            meta_description: "Convert inches to centimeters and centimeters to inches instantly. Accurate, fast, and easy-to-use length conversion tool.",
            meta_keywords: "inch to cm, cm to inch, inches to centimeters, centimeters to inches, length converter, measurement converter"
        },
        
        zh: {
            title: "英寸转厘米转换器",
            subtitle: "使用我们准确易用的转换工具，即时在英寸和厘米之间进行转换",
            
            inches_to_cm: "英寸转厘米",
            cm_to_inches: "厘米转英寸",
            enter_inches: "输入英寸：",
            enter_cm: "输入厘米：",
            enter_inches_placeholder: "输入英寸",
            enter_cm_placeholder: "输入厘米",
            
            common_conversions: "常用转换参考",
            table_inches: "英寸",
            table_cm: "厘米",
            
            about_title: "关于此转换工具",
            about_learn: "了解如何有效使用此工具",
            about_guide: "查看我们的综合指南。",
            demo_notice: "演示值：10英寸 = 25.4厘米",
            
            formula_title: "转换公式",
            formula_in_to_cm: "1英寸 = 2.54厘米",
            formula_cm_to_in: "1厘米 = 0.393701英寸",
            
            quick_ref_title: "快速参考",
            quick_ref_1: "1/4英寸 = 0.635厘米",
            quick_ref_2: "1/2英寸 = 1.27厘米",
            quick_ref_3: "3/4英寸 = 1.905厘米",
            quick_ref_4: "1英寸 = 2.54厘米",
            quick_ref_5: "2英寸 = 5.08厘米",
            quick_ref_6: "6英寸 = 15.24厘米",
            quick_ref_7: "12英寸（1英尺）= 30.48厘米",
            
            footer_copyright: "© 2026 inch-to-cm.online - 免费在线长度转换工具",
            footer_tagline: "简单准确的英寸厘米互换转换",
            
            meta_title: "英寸转厘米转换器 - 免费在线长度转换工具",
            meta_description: "即时将英寸转换为厘米，或将厘米转换为英寸。准确、快速、易用的长度转换工具。",
            meta_keywords: "英寸转厘米, 厘米转英寸, 长度转换器, 测量转换"
        },
        
        ja: {
            title: "インチからセンチメートル変換",
            subtitle: "正確で使いやすい変換ツールで、インチとセンチメートルを即座に変換",
            
            inches_to_cm: "インチからセンチメートル",
            cm_to_inches: "センチメートルからインチ",
            enter_inches: "インチを入力：",
            enter_cm: "センチメートルを入力：",
            enter_inches_placeholder: "インチを入力",
            enter_cm_placeholder: "センチメートルを入力",
            
            common_conversions: "一般的な変換参照",
            table_inches: "インチ",
            table_cm: "センチメートル",
            
            about_title: "この変換ツールについて",
            about_learn: "このツールを効果的に使用する方法を学ぶ",
            about_guide: "総合ガイドをご覧ください。",
            demo_notice: "デモ値：10インチ = 25.4センチメートル",
            
            formula_title: "変換式",
            formula_in_to_cm: "1インチ = 2.54センチメートル",
            formula_cm_to_in: "1センチメートル = 0.393701インチ",
            
            quick_ref_title: "クイックリファレンス",
            quick_ref_1: "1/4インチ = 0.635cm",
            quick_ref_2: "1/2インチ = 1.27cm",
            quick_ref_3: "3/4インチ = 1.905cm",
            quick_ref_4: "1インチ = 2.54cm",
            quick_ref_5: "2インチ = 5.08cm",
            quick_ref_6: "6インチ = 15.24cm",
            quick_ref_7: "12インチ（1フィート）= 30.48cm",
            
            footer_copyright: "© 2026 inch-to-cm.online - 無料オンライン長さ変換ツール",
            footer_tagline: "シンプルで正確なインチ・センチ変換",
            
            meta_title: "インチからセンチ変換 - 無料オンライン長さ変換ツール",
            meta_description: "インチをセンチメートルに、センチメートルをインチに即座に変換。正確、高速、使いやすい長さ変換ツール。",
            meta_keywords: "インチからセンチ, センチからインチ, 長さ変換, 測定変換"
        },
        
        es: {
            title: "Convertidor de Pulgadas a CM",
            subtitle: "Convierte entre pulgadas y centímetros instantáneamente con nuestra herramienta precisa y fácil de usar",
            
            inches_to_cm: "Pulgadas a Centímetros",
            cm_to_inches: "Centímetros a Pulgadas",
            enter_inches: "Ingresa Pulgadas:",
            enter_cm: "Ingresa Centímetros:",
            enter_inches_placeholder: "Ingresa pulgadas",
            enter_cm_placeholder: "Ingresa centímetros",
            
            common_conversions: "Referencia de Conversiones Comunes",
            table_inches: "Pulgadas",
            table_cm: "Centímetros",
            
            about_title: "Acerca de Esta Herramienta de Conversión",
            about_learn: "Aprende a usar esta herramienta eficazmente",
            about_guide: "con nuestra guía completa.",
            demo_notice: "Valores de demostración: 10 pulgadas = 25.4 centímetros",
            
            formula_title: "Fórmula de Conversión",
            formula_in_to_cm: "1 pulgada = 2.54 centímetros",
            formula_cm_to_in: "1 centímetro = 0.393701 pulgadas",
            
            quick_ref_title: "Referencia Rápida",
            quick_ref_1: "1/4 pulgada = 0.635 cm",
            quick_ref_2: "1/2 pulgada = 1.27 cm",
            quick_ref_3: "3/4 pulgada = 1.905 cm",
            quick_ref_4: "1 pulgada = 2.54 cm",
            quick_ref_5: "2 pulgadas = 5.08 cm",
            quick_ref_6: "6 pulgadas = 15.24 cm",
            quick_ref_7: "12 pulgadas (1 pie) = 30.48 cm",
            
            footer_copyright: "© 2026 inch-to-cm.online - Herramienta Gratuita de Conversión de Longitud",
            footer_tagline: "Conversiones precisas de pulgadas a cm y de cm a pulgadas de forma sencilla",
            
            meta_title: "Convertidor de Pulgadas a CM - Herramienta Gratuita de Conversión",
            meta_description: "Convierte pulgadas a centímetros y centímetros a pulgadas instantáneamente. Herramienta de conversión precisa, rápida y fácil de usar.",
            meta_keywords: "pulgadas a cm, cm a pulgadas, convertidor de longitud, conversión de medidas"
        },
        
        fr: {
            title: "Convertisseur Pouce en CM",
            subtitle: "Convertissez instantanément entre pouces et centimètres avec notre outil précis et facile à utiliser",
            
            inches_to_cm: "Pouces en Centimètres",
            cm_to_inches: "Centimètres en Pouces",
            enter_inches: "Entrez les Pouces:",
            enter_cm: "Entrez les Centimètres:",
            enter_inches_placeholder: "Entrez les pouces",
            enter_cm_placeholder: "Entrez les centimètres",
            
            common_conversions: "Référence des Conversions Courantes",
            table_inches: "Pouces",
            table_cm: "Centimètres",
            
            about_title: "À Propos de Cet Outil de Conversion",
            about_learn: "Apprenez à utiliser cet outil efficacement",
            about_guide: "avec notre guide complet.",
            demo_notice: "Valeurs de démonstration: 10 pouces = 25.4 centimètres",
            
            formula_title: "Formule de Conversion",
            formula_in_to_cm: "1 pouce = 2.54 centimètres",
            formula_cm_to_in: "1 centimètre = 0.393701 pouces",
            
            quick_ref_title: "Référence Rapide",
            quick_ref_1: "1/4 pouce = 0.635 cm",
            quick_ref_2: "1/2 pouce = 1.27 cm",
            quick_ref_3: "3/4 pouce = 1.905 cm",
            quick_ref_4: "1 pouce = 2.54 cm",
            quick_ref_5: "2 pouces = 5.08 cm",
            quick_ref_6: "6 pouces = 15.24 cm",
            quick_ref_7: "12 pouces (1 pied) = 30.48 cm",
            
            footer_copyright: "© 2026 inch-to-cm.online - Outil Gratuit de Conversion de Longueur",
            footer_tagline: "Conversions précises pouces en cm et cm en pouces simplifiées",
            
            meta_title: "Convertisseur Pouce en CM - Outil Gratuit de Conversion",
            meta_description: "Convertissez les pouces en centimètres et vice versa instantanément. Outil de conversion précis, rapide et facile à utiliser.",
            meta_keywords: "pouce en cm, cm en pouce, convertisseur de longueur, conversion de mesure"
        },
        
        de: {
            title: "Zoll zu CM Umrechner",
            subtitle: "Konvertieren Sie sofort zwischen Zoll und Zentimetern mit unserem präzisen und benutzerfreundlichen Tool",
            
            inches_to_cm: "Zoll in Zentimeter",
            cm_to_inches: "Zentimeter in Zoll",
            enter_inches: "Zoll eingeben:",
            enter_cm: "Zentimeter eingeben:",
            enter_inches_placeholder: "Zoll eingeben",
            enter_cm_placeholder: "Zentimeter eingeben",
            
            common_conversions: "Häufige Umrechnungen Referenz",
            table_inches: "Zoll",
            table_cm: "Zentimeter",
            
            about_title: "Über dieses Umrechnungstool",
            about_learn: "Erfahren Sie, wie Sie dieses Tool effektiv nutzen",
            about_guide: "mit unserem umfassenden Leitfaden.",
            demo_notice: "Demowerte: 10 Zoll = 25.4 Zentimeter",
            
            formula_title: "Umrechnungsformel",
            formula_in_to_cm: "1 Zoll = 2.54 Zentimeter",
            formula_cm_to_in: "1 Zentimeter = 0.393701 Zoll",
            
            quick_ref_title: "Schnellreferenz",
            quick_ref_1: "1/4 Zoll = 0.635 cm",
            quick_ref_2: "1/2 Zoll = 1.27 cm",
            quick_ref_3: "3/4 Zoll = 1.905 cm",
            quick_ref_4: "1 Zoll = 2.54 cm",
            quick_ref_5: "2 Zoll = 5.08 cm",
            quick_ref_6: "6 Zoll = 15.24 cm",
            quick_ref_7: "12 Zoll (1 Fuß) = 30.48 cm",
            
            footer_copyright: "© 2026 inch-to-cm.online - Kostenloses Online-Längen-Umrechnungstool",
            footer_tagline: "Präzise Zoll-cm und cm-Zoll Umrechnungen einfach gemacht",
            
            meta_title: "Zoll zu CM Umrechner - Kostenloses Online-Längen-Umrechnungstool",
            meta_description: "Konvertieren Sie Zoll in Zentimeter und umgekehrt sofort. Präzises, schnelles und benutzerfreundliches Längen-Umrechnungstool.",
            meta_keywords: "zoll in cm, cm in zoll, längenumrechner, messungsumrechnung"
        }
    },
    
    init() {
        const savedLang = localStorage.getItem('i18n_lang');
        const browserLang = navigator.language.split('-')[0];
        
        if (savedLang && this.translations[savedLang]) {
            this.currentLang = savedLang;
        } else if (this.translations[browserLang]) {
            this.currentLang = browserLang;
        }
        
        this.updatePage();
        this.createLangSelector();
    },
    
    t(key) {
        return this.translations[this.currentLang]?.[key] || this.translations['en']?.[key] || key;
    },
    
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('i18n_lang', lang);
            this.updatePage();
            this.updateMeta();
        }
    },
    
    updatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        
        document.documentElement.lang = this.currentLang;
    },
    
    updateMeta() {
        document.title = this.t('meta_title');
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.content = this.t('meta_description');
    },
    
    createLangSelector() {
        const selector = document.getElementById('lang-selector');
        if (!selector) return;
        
        selector.innerHTML = Object.entries(this.languages)
            .map(([code, info]) => `
                <button class="lang-btn ${code === this.currentLang ? 'active' : ''}" data-lang="${code}" title="${info.name}">
                    ${info.flag}
                </button>
            `).join('');
        
        selector.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLang(btn.dataset.lang);
                selector.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => i18n.init());
