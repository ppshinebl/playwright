// Import additional options
interface ProgramOptions {
    disableTooltips?: boolean;
    // other options... 
}

// Update the context._enableRecorder call
context._enableRecorder({ 
    disableTooltips: options.disableTooltips,
    // other options...
});