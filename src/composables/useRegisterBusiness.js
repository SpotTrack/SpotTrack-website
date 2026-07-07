import { environment } from '../config/environment.js'

const TIER_MAP = { basic: 'Basic', mid: 'Mid', platinum: 'Premium' }

export async function registerBusiness(planKey, formData) {
  const membershipTier = TIER_MAP[planKey]
  if (!membershipTier) throw new Error('Invalid plan key')

  const res = await fetch(`${environment.backendUrl}/api/v1/register-business`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: formData.email,
      password: formData.password,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      dni: formData.dni,
      companyName: formData.companyName,
      ruc: formData.ruc,
      legalStructure: formData.legalStructure,
      companyPhone: formData.companyPhone,
      companyEmail: formData.companyEmail,
      streetAddress: formData.streetAddress,
      city: formData.city,
      district: formData.district,
      membershipTier
    })
  })

  if (!res.ok) {
    let message = `Error ${res.status}`
    try {
      const data = await res.json()
      message = data.message || data.error || data.title || message
    } catch { /* body not JSON, keep status fallback */ }
    throw new Error(message)
  }

  const { checkoutUrl } = await res.json()
  return checkoutUrl
}
