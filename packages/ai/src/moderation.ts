export async function scanMessageForPolicyViolations(
  content: string,
): Promise<boolean> {
  // In a real implementation, this would call an LLM or a classification model.
  // For now, we use a simple heuristic mock to detect off-platform payment attempts or phishing.
  const lowerContent = content.toLowerCase();

  if (
    lowerContent.includes("pay me on venmo") ||
    lowerContent.includes("cashapp me") ||
    lowerContent.includes("paypal.me") ||
    lowerContent.includes("click this link to buy")
  ) {
    // Note: The message is flagged silently. The system should insert a row into moderation_cases.
    return true;
  }

  return false;
}
