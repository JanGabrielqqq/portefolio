const loremText = `lOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. pELLENTESQUE TEMPUS DIAM A RISUS POSUERE, AT VOLUTPAT EST FEUGIAT. mORBI FERMENTUM, ELIT UT FRINGILLA VENENATIS, NEQUE LIGULA MATTIS NEQUE, EGET LUCTUS NISI DOLOR EU NISI. sUSPENDISSE TRISTIQUE VENENATIS LECTUS NON VIVERRA. dONEC A ARCU ID URNA FACILISIS ACCUMSAN. nULLA PELLENTESQUE HENDRERIT ULTRICIES. nUNC PORTA SEM NULLA, QUIS ULTRICIES MAURIS COMMODO NEC. qUISQUE VEL VENENATIS LIBERO. aLIQUAM PELLENTESQUE, METUS AT SOLLICITUDIN CONGUE, ORCI NISI ELEMENTUM DIAM, ID FACILISIS LOREM EST UT ODIO.`

const Logo = () => {
  const compact = loremText.replace(/[\s.,]/g, "")
  return (
    <div aria-hidden="true" className="rounded-full sm:ml-[-50px] overflow-clip inline-block ">
      <p className="size-55 contrast-120 break-all text-[6px] leading-[0.75] font-semibold tracking-tight bg-[url('/assets/logo.png')] bg-cover bg-center bg-no-repeat text-transparent bg-clip-text [text-fill-color:transparent]">
        {compact}
        {compact}
        {compact}
        {compact}
        {compact}
        {compact}
        {compact}

      </p>
    </div>
  )
}

export default Logo
