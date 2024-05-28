import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Cart = () => {
    return (
        <div>
            <h1 className="text-4xl">
                cart Page
            </h1>
            <Link to="/" className="text-7xl text-red-900">
                back to home
            </Link>
            <Button asChild size="lg">
                <Link to="/">
                    back to home button
                </Link>
            </Button>
        </div>
    )
}
export default Cart