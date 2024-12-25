# Expo Image Component Silent Failure

This repository demonstrates a silent failure in Expo's `Image` component when provided with an invalid or inaccessible image URI. The component doesn't throw an error or provide a clear indication of the problem; the image simply fails to render.

## Bug Description
The `Image` component from Expo's `expo-image` package does not provide useful feedback when the image source is invalid. This makes debugging difficult because there is no error message in the console.

## Steps to Reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run the app. Observe the broken image.

## Solution
The solution involves adding error handling to check if the image successfully loads or not.