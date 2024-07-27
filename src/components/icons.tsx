import * as React from 'react'

function IconBadge({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#2E2F32"
      stroke="#2E2F32"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  )
}

function IconLogo({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="#fff"
      className="icon-logo"
      height="20"
      width="20"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 612.001 612.001"
    >
      <g>
        <g>
          <path
            d="M376.924,57.709l-198.438,353.1l67.533,0.192l134.098-233.178l231.884,412.437v-88.14c0-6.784-1.691-13.461-4.922-19.426
			L376.924,57.709z"
          />
          <path
            d="M414.796,493.566l-29.716-49.345l-164.13-0.001l-97.789,0.001L357.477,21.77l-51.575-0.03
			c-7.266-0.004-13.985,3.857-17.64,10.137L19.788,493.19L414.796,493.566z"
          />
          <path
            d="M0,569.865c0,11.265,9.131,20.396,20.396,20.396h551.152L379.666,248.074l-33.991,58.874l76.609,132.6l53.702,88.324H0
			V569.865z"
          />
        </g>
      </g>
    </svg>
  )
}

function IconSmallServices({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED7B29"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  )
}

function IconSmallTestimonials({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ED7B29"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function IconSmallIntegration({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke="#ED7B29"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 22v-2" />
      <path d="m17 20.66-1-1.73" />
      <path d="M11 10.27 7 3.34" />
      <path d="m20.66 17-1.73-1" />
      <path d="m3.34 7 1.73 1" />
      <path d="M14 12h8" />
      <path d="M2 12h2" />
      <path d="m20.66 7-1.73 1" />
      <path d="m3.34 17 1.73-1" />
      <path d="m17 3.34-1 1.73" />
      <path d="m11 13.73-4 6.93" />
    </svg>
  )
}

function IconCalendly({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      id="logosandtypes_com"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width="16"
      height="16"
      fill="#0077B5"  // Assuming #0077B5 is the calednyl blue hex code
      stroke="#fff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
     
      <g id="Layer_3">
        <path id="Layer_3-2" className="cls-1" d="M0,0H150V150H0V0Z" />
      </g>
      <path
        className="cls-2"
        d="M138.46,86.65c-2.81-2.06-8.53-4.62-13.36-6.26,.5-3.15,.68-7.1-.09-11.67h-.02v-.11h.02v.11c4.86-.88,9.46-2.85,13.45-5.77,3.83-2.84,3.09-6.04,2.51-7.94-4.74-15.37-14.84-28.52-28.45-37.08-13.61-8.55-29.85-11.94-45.75-9.55-15.9,2.4-30.41,10.42-40.9,22.61-10.49,12.18-16.26,27.73-16.26,43.81s5.77,31.63,16.26,43.81c10.49,12.19,25,20.21,40.9,22.61,15.9,2.39,32.14-1,45.75-9.55,13.61-8.56,23.71-21.71,28.45-37.08,.58-1.9,1.32-5.1-2.51-7.94Zm-4.32,5.83c-4.23,13.71-13.24,25.44-25.38,33.07-12.15,7.63-26.63,10.64-40.81,8.5-14.19-2.14-27.13-9.29-36.49-20.17-9.35-10.87-14.5-24.74-14.5-39.08s5.15-28.21,14.5-39.08c9.36-10.88,22.3-18.03,36.49-20.17,14.18-2.14,28.66,.87,40.81,8.5,12.14,7.63,21.15,19.36,25.38,33.07,0,.03,.02,.07,.04,.1-2.07,1.5-6.86,3.3-11.14,4.57l-.04-.08c-.61-1.51-1.32-2.99-2.14-4.4l-6.81-11.8c-3.07-5.31-7.48-9.73-12.8-12.8s-11.35-4.69-17.49-4.69h-13.63c-6.14,0-12.17,1.62-17.49,4.69-5.31,3.07-9.73,7.49-12.8,12.8l-6.81,11.8c-3.07,5.32-4.69,11.35-4.69,17.49s1.62,12.17,4.69,17.49l6.81,11.8c3.07,5.31,7.49,9.73,12.8,12.8,5.32,3.07,11.35,4.69,17.49,4.69h13.63c6.14,0,12.17-1.62,17.49-4.69s9.73-7.49,12.8-12.8l6.81-11.78c.82-1.41,1.53-2.89,2.14-4.4l.04-.09s0-.01,.01-.02h.01c4.02,.62,7.83,2.19,11.12,4.58,0,.03-.02,.07-.04,.1Z"
      />
      <path
        className="cls-3"
        d="M123.04,61.8c-1.53,.25-3.08,.39-4.64,.39-10.19,0-14.01-3.39-18.43-7.31-4.27-3.79-9.58-8.49-19.25-8.49h-5.78c-6.99,0-13.35,2.54-17.89,7.14-4.44,4.5-6.89,10.66-6.89,17.34v7.9c0,6.68,2.45,12.84,6.89,17.34,4.55,4.6,10.9,7.14,17.89,7.14h5.78c9.67,0,14.98-4.71,19.25-8.49,4.42-3.9,8.25-7.31,18.43-7.31,1.55,0,3.11,.12,4.64,.37,.88-2.2,2.17-7.92,2.06-7.43-2.32-.21-4.5-.11-6.72-.11-23.41,0-22.19,15.81-37.69,15.81h-5.78c-10.64,0-17.63-7.6-17.63-17.33v-7.92c0-9.72,6.99-17.32,17.63-17.32h5.78c15.5,0,14.28,15.8,37.69,15.8,2.22,0,4.43-.2,6.61-.6v-.11c-.42-2.33-1.07-4.62-1.95-6.82Z"
      />
    </svg>
  )
}

function IconLayers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  )
}

function IconFrontends({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
      <rect width="10" height="7" x="12" y="13" rx="2" />
    </svg>
  )
}

function IconAutonomy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
      <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
      <path d="M6 18a4 4 0 0 1-1.967-.516" />
      <path d="M12 13h4" />
      <path d="M12 18h6a2 2 0 0 1 2 2v1" />
      <path d="M12 8h8" />
      <path d="M16 8V5a2 2 0 0 1 2-2" />
      <circle cx="16" cy="13" r=".5" />
      <circle cx="18" cy="3" r=".5" />
      <circle cx="20" cy="21" r=".5" />
      <circle cx="20" cy="8" r=".5" />
    </svg>
  )
}

export {
  IconBadge,
  IconSmallServices,
  IconSmallIntegration,
  IconSmallTestimonials,
  IconLayers,
  IconFrontends,
  IconAutonomy,
  IconLogo,
  IconCalendly,
}
