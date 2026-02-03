import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const WAITLIST_FILE = path.join(process.cwd(), 'waitlist.json')

interface WaitlistEntry {
  email: string
  timestamp: string
  source?: string
}

async function getWaitlist(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(WAITLIST_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

async function saveWaitlist(entries: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(WAITLIST_FILE, JSON.stringify(entries, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    const waitlist = await getWaitlist()
    
    // Check for duplicates
    if (waitlist.some(entry => entry.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { message: 'Déjà inscrit', alreadyExists: true },
        { status: 200 }
      )
    }

    // Add new entry
    waitlist.push({
      email: email.toLowerCase().trim(),
      timestamp: new Date().toISOString(),
      source: source || 'landing-page'
    })

    await saveWaitlist(waitlist)

    return NextResponse.json(
      { message: 'Inscrit avec succès', count: waitlist.length },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const waitlist = await getWaitlist()
    return NextResponse.json({
      count: waitlist.length,
      // Don't expose emails in GET, just count
    })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
