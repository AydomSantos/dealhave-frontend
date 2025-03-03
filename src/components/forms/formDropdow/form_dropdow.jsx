import React, { useState } from "react";
import "./form_dropdow.css";

const DropdownForm = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <div className="faq-container">
            <h1 className="faq-title">Dúvidas Comuns</h1>
            <p className="faq-subtitle">Precisa de ajuda? Encontre respostas abaixo!</p>
            
            <div className="faq-accordion">
                {faqData.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <div className="faq-header">
                            <button 
                                className={`faq-button ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <span>{item.title}</span>
                                <span className="plus-icon">
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </button>
                        </div>
                        <div className={`faq-content ${activeIndex === index ? 'active' : ''}`}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const faqData = [
    {
        title: "Serviços de Limpeza",
        content: "Informações sobre nossos serviços de limpeza e como funcionam."
    },
    {
        title: "Equipamentos e Materiais",
        content: "Detalhes sobre os equipamentos e materiais utilizados em nossos serviços."
    },
    {
        title: "Instruções Específicas",
        content: "Posso dar instruções específicas aos profissionais ou fazer pedidos especiais? Claro! Ao agendar o serviço online, há um campo dedicado para \"Instruções Especiais\". Você pode detalhar suas preferências (ex.: evitar um cômodo, usar produtos hipoalergênicos). Após a limpeza, também é possível atualizar essas instruções na sua avaliação do serviço."
    },
    {
        title: "Descontos e Benefícios",
        content: "Informações sobre nossos programas de desconto e benefícios para clientes."
    },
    {
        title: "Outras Dúvidas",
        content: "Respostas para outras perguntas frequentes sobre nossos serviços."
    }
];

export default DropdownForm;