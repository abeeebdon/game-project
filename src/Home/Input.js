const Input = ({ input }) => {
  const { id, label, identity, placeholder } = input
  return (
    <>
      <label>{label}</label>
      <input type={identity} id={id} placeholder={placeholder} required />
    </>
  )
}
export default Input
