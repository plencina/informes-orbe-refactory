"use client"
import styles from "@/app/styles/page.module.css";
import Update from "@/app/(client)/update/update";
import ReportInterface from "@/app/interfaces/report"

// constructor component
const update = {
  _id:"67d092a9700eb8e754e2c56f",
  titulo:"CONTRABANDO DE NEUMÁTICOS FUE SECUESTRADO POR GENDARMERÍA",
  imagen:"https://i.ibb.co/Jww8nWz8/db594c746783.jpg",
  parrafos:["(11 Mar -25) En un procedimiento realizado por efectivos de la Sección \"Seguridad Vial\" del Escuadrón 10, con apoyo de la Unidad de Investigaciones de Delitos Complejos y Procedimientos Judiciales \"Eldorado”, se procedió a inspeccionar un transporte perteneciente a una empresa de envíos.\n","Durante el registro del interior del rodado, los gendarmes   detectaron 516 neumáticos de procedencia extranjera, como así también cinco bultos de encomiendas que contenían mercadería.\n","Al tratarse de una presunta infracción a la Ley 22.415, los uniformados incautaron el cargamento, valuado estimativamente en más de 35 millones de pesos.\n","Intervinieron el Juzgado Federal y la Fiscalía Federal de Eldorado."],
  hora_subida: 1741722281469,
  genero: "correcto"
}
export default function Home() {
  const download = async () => {
    const response = await fetch('api/read?page=1')
    const result = await response.json()
    if (result.success) console.log(result.result)
    if (result.error) console.log(result.error)
  }
return <div className={styles.main}>  
  <button onClick={download}>download</button>
  </div>
}
// <Update />  component

