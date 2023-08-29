function telephoneCheck(str) {
  // Regular expression patterns for valid US phone number formats
  const patterns = [
    /^(1\s?)?\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,            // 555-555-5555, 1 555 555 5555
    /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,          // (555)555-5555
    /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/,          // (555) 555-5555
    /^(1\s?)?\d{10}$/                                // 5555555555
  ];

  // Check if the input string matches any of the valid patterns
  return patterns.some(pattern => pattern.test(str));
}
telephoneCheck("555-555-5555");
