export function Settings({ choice }: { choice: string }) {
    switch (choice) {
        case 'profile':
            return <h1>Profile</h1>
        case 'privacy':
            return <h1>Privacy</h1>
        case 'theme':
            return <h1>Theme</h1>
        case 'manage bots':
            return <h1>Manage Bots</h1>
        case 'billing':
            return <h1>Billing</h1>
        case 'help':
            return <h1>Help</h1>
        case 'export data':
            return <h1>Export Data</h1>
        case 'delete account':
            return <h1>Delete Account</h1>
        default:
            return <h1>Profile</h1>
    }
}