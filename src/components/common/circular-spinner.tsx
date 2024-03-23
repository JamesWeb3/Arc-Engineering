interface CircularSpinnerProps {
  useAlternativeColor?: boolean // Controls if alternative color should be used
}

export function CircularSpinner({
  useAlternativeColor = false, // False by default
}: CircularSpinnerProps) {
  // Define classes for the spinner color and the transparent section
  // directly based on the useAlternativeColor prop
  const spinnerColorClass = useAlternativeColor
    ? 'border-blue-500 dark:border-blue-700' // Use alternative colors
    : 'border-gray-200 dark:border-gray-800' // Default colors

  const spinnerTransparentClass = useAlternativeColor
    ? 'border-t-blue-700 dark:border-t-blue-500' // Alternative transparent section color
    : 'border-t-gray-800 dark:border-t-gray-200' // Default transparent section color

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-2 ${spinnerColorClass} ${spinnerTransparentClass}`}
        style={{
          width: '1em',
          height: '1em',
        }}
      ></div>
    </div>
  )
}
