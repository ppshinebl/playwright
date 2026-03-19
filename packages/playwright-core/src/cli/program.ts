// ... existing code

    // Add this line to the options array
    ['--disable-tooltips', 'disable tooltips for element locators during codegen'],

// .. existing code

// Update the codegen function signature
export function codegen(options: Options & { disableTooltips?: boolean }) {
    // .. existing code
    context._enableRecorder({
        // .. existing options,
        disableTooltips: options.disableTooltips,
    });