import React from 'react';
import '../styles/SubscriptionTable.css'; // Asegúrate de crear un archivo CSS para los estilos

const subscriptions = [
  {
    plan: 'Básico',
    price: '$10',
    duration: '1 mes',
    features: ['Acceso a contenido básico', 'Soporte por email'],
  },
  {
    plan: 'Estándar',
    price: '$20',
    duration: '1 mes',
    features: ['Acceso a todo el contenido', 'Soporte prioritario'],
  },
  {
    plan: 'Premium',
    price: '$30',
    duration: '1 mes',
    features: ['Acceso ilimitado', 'Soporte 24/7', 'Acceso a contenido exclusivo'],
  },
];

const SubscriptionTable = () => {
  return (
    <div className="subscription-table">
      <h2>Planes de Suscripción</h2>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Precio</th>
            <th>Duración</th>
            <th>Características</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub, index) => (
            <tr key={index}>
              <td>{sub.plan}</td>
              <td>{sub.price}</td>
              <td>{sub.duration}</td>
              <td>
                <ul>
                  {sub.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionTable;
